// project imports
import SubCard from "views/ui-component/cards/SubCard";
import calculus from "../../../../math/calculus/index";
import { useState, useEffect } from "react";
import GraphMenu from "math/GraphMenu";
import { Grid } from "@mui/material";
import GraphBox from "math/GraphBox";
import { MathJax } from "better-react-mathjax";
import TransferFunction from "math/algebra/functions/transfer";
import MainCard from "views/ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { makeProgress } from "toolshed";
import NyquistPlotParameters from './parameters';
const symbols = {
    in: "jw",
    out: "H",
};

const makeTrace = (x, y, thickness, legend, _3d, mode = "lines") => {
    return {
        x,
        y,
        z: _3d ? Array(x.length).fill(0) : null,
        line: {
            // color:'rgb(17, 157, 255)'
            width: thickness,
        },
        type: "scatter" + (_3d ? "3d" : ""),
        mode,
        name: `$$${legend}$$`,
    };
};

const NyquistPlot = () => {
    const [rawNumerator, $rawNumerator] = useState("1");
    const [rawDenominator, $rawDenominator] = useState("1 1");
    const [H_s, $H_s] = useState(null);
    const [w_min, $w_min] = useState(-10);
    const [w_max, $w_max] = useState(10);
    // gradiant of u(t) is 0 and unit ramp is one
    const [systems, $systems] = useState([]);
    const [traces, $traces] = useState([]);
    const [response, $response] = useState(null);
    const [thickness, $thickness] = useState(1.0); // graph line thickness
    const [isGraphCatured, $graphCaptured] = useState(false);
    const [is3DPlotEnabled, $3DPlotEnabled] = useState(false);
    const [phaseInRadianScale, setPhaseInRadianScale] = useState(true); // for degree => 180 / PI, for radian scale => 1.0
    const [N, $N] = useState(1000);
    const [responseTime, setResponseTime] = useState(null);

    const toggle3DPlot = () => $3DPlotEnabled(!is3DPlotEnabled);

    const capture = () => {
        const capturedSystems = [...systems];

        if (capturedSystems.findIndex((sys) => H_s.equals(sys.H)) === -1) {
            // if current system has not been captured before => then capture it; o.w. its not needed
            capturedSystems.push({
                H_s,
                thickness,
                legend:
                    symbols.out + "_{" + (systems.length + 1).toString() + "}",
            });
            $systems(capturedSystems);
            $graphCaptured(true);

        }
    };

    useEffect(() => {
        (async () => {
            try {
                const num = calculus.stringToArray(rawNumerator),
                den = calculus.stringToArray(rawDenominator);
                const progressBarElement =
                document.getElementById("fr_progressbar");
                const h_s = new TransferFunction(num, den);
                $H_s(h_s);
                $response("$$" + h_s.label("H") + "$$");
                await makeProgress(progressBarElement, 0);
                setResponseTime('درحال محاسبه');
                // parameters changed => load again all traces(traces); this is for when shared params changes(ti, tf, ...),
                // so that the traces will be loaded with new conditions
                let repeatedSystem = false;
                const startTime = new Date();
                const all = systems.map(async (sys, i) => {
                    const [x, y] = await calculus.complexPointify(
                        sys.H_s.nyquist,
                        +w_min,
                        +w_max,
                        +N
                    );
                    if (h_s.equals(sys.H_s)) repeatedSystem = true;
                    await makeProgress(
                        progressBarElement,
                        (100 * i) / (systems.length + 1)
                    );
                    return makeTrace(
                        x,
                        y,
                        sys.thickness,
                        sys.legend,
                        is3DPlotEnabled,
                        "lines"
                    );
                });
                if (!repeatedSystem) {
                    // if current system isnt in traces list => add it temperory to plot

                    let [x, y] = await calculus.complexPointify(
                        h_s.nyquist,
                        +w_min,
                        +w_max,
                        +N
                    );
                    const newsys = makeTrace(
                        x,
                        y,
                        thickness,
                        `${symbols.out}(${symbols.in})`,
                        is3DPlotEnabled,
                        "lines"
                    );
                    all.push(newsys);
                    const endTime = new Date();
                    setResponseTime(((+endTime - +startTime) / 1000) + " ثانیه");
                }
                await makeProgress(progressBarElement, 100);

                $traces(all);
            } catch (ex) {
                console.log(ex);
            }
        })();
    }, [
        rawNumerator,
        rawDenominator,
        w_min,
        w_max,
        is3DPlotEnabled,
        thickness,
        systems,
        N,
    ]);

    useEffect(() => {
        $graphCaptured(false);
    }, [rawNumerator, rawDenominator]);

    const update = (changes) => {
        if (changes) $thickness(changes.thickness);
        //and so...
    };
    return (
        <MainCard>
            <Grid item spacing={gridSpacing}>
                <h2 className="chapter-section-title">
                    {" "}
                    پاسخ فرکانسی سیستم ها
                </h2>
            </Grid>
            <Grid item spacing={gridSpacing}>
                <Grid container direction="column" spacing={1}>
                    <Grid sx={{ margin: "auto", width: "100%" }} item>
                        <SubCard sx={{ direction: "ltr" }}>
                            <Grid
                                id="formulaBox"
                                sx={{ margin: "auto" }}
                                container
                                direction="row"
                            >
                                {systems.map((sys, index) => {
                                    let formula =
                                        "$$" +
                                        sys.H_s.label("H", index + 1) +
                                        "$$";

                                    return (
                                        <Grid
                                            style={{ fontSize: "18px" }}
                                            md={6}
                                            sm={12}
                                            item
                                        >
                                            <MathJax>{formula}</MathJax>
                                        </Grid>
                                    );
                                })}
                                {!isGraphCatured && (
                                    <Grid
                                        style={{ fontSize: "18px" }}
                                        md={6}
                                        sm={12}
                                    >
                                        <MathJax>{response}</MathJax>
                                    </Grid>
                                )}
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid
                        spacing={2}
                        style={{
                            width: "100%",
                            height: "100%",
                            margin: "auto",
                            direction: "ltr",
                        }}
                        container
                    >
                        <Grid
                            md={3}
                            sm={12}
                            xs={12}
                            sx={{ marginTop: "1%", width: "100%" }}
                            container
                        >
                            <Grid xs={12}>
                                <NyquistPlotParameters
                                    rawNumerator={rawNumerator}
                                    rawDenominator={rawDenominator}
                                    $rawNumerator={$rawNumerator}
                                    $rawDenominator={$rawDenominator}
                                    w_min={w_min}
                                    w_max={w_max}
                                    $w_min={$w_min}
                                    $w_max={$w_max}
                                    phaseInRadianScale={phaseInRadianScale}
                                    setPhaseInRadianScale={
                                        setPhaseInRadianScale
                                    }
                                    responseTime={responseTime}
                                    N={N}
                                    $N={$N}
                                />
                            </Grid>
                        </Grid>
                        <Grid md={9} sm={12} xs={12} item>
                            <SubCard>
                                <GraphMenu
                                    capture={capture}
                                    formulaFileName={
                                        "Water Tank Level Equations _ " +
                                        [
                                            ...systems.map((sys) => sys.legend),
                                        ].join() +
                                        ".png"
                                    }
                                    graphFileName={
                                        [
                                            ...systems.map(
                                                (sys) =>
                                                    `${sys.legend}{alpha=${
                                                        sys.a
                                                    }_k=${sys.k}_in=${
                                                        sys.inputSignal
                                                            ? "ramp"
                                                            : "step"
                                                    }}`
                                            ),
                                        ].join(", ") + ".png"
                                    }
                                    reset={() => $systems([])}
                                    update={(changes) => update(changes)}
                                    toggle3DPlot={toggle3DPlot}
                                />
                            </SubCard>
                            <hr />
                            <Grid lg={12} md={12} sm={12} xs={12} item>
                                <SubCard>
                                    <Grid lg={12} md={12} sm={12} xs={12} item>
                                        <GraphBox
                                            title="پاسخ فرکانسی"
                                            traces={traces}
                                        />
                                    </Grid>
                                </SubCard>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default NyquistPlot;
