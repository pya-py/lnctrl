import { Button, Grid } from "@mui/material";
import CoordinateSystem from "views/input-boxes/CoordinateSystem";
import SubCard from "views/ui-component/cards/SubCard";
import SimpleParametersList from "views/input-boxes/SimpleParametersList";
import { gridSpacing } from "store/constant";
import ProgressBar from "views/ui-component/progressbar/ProgressBar";

const startLebels = [
    "$$Num = [$$",
    "$$Den = [$$",
    "$$k_{min} = $$",
    "$$k_{max} = $$",
];
const endLabels = ["$$]$$", "$$]$$", null, null];

const RootLocusParameters = ({
    rawNumerator,
    rawDenominator,
    $rawNumerator,
    $rawDenominator,
    k_min,
    k_max,
    $k_min,
    $k_max,
    updatePlot,
    responseTime
}) => (
    <SubCard
        darkBorder
        title="پارامترها"
        sx={{
            direction: "ltr",
            textAlign: "right",
            height: "100%",
        }}
    >
        <Grid spacing={gridSpacing} container direction="row">
            <SimpleParametersList
                parameters={[rawNumerator, rawDenominator, k_min, k_max]}
                setters={[$rawNumerator, $rawDenominator, $k_min, $k_max]}
                labels={startLebels}
                units={endLabels}
            />
            <Grid md={12} sm={4} xs={6} item>
                <Button
                    onClick={updatePlot}
                    style={{
                        width: "100%",
                        textTransform: "none",
                        background: "coral",
                    }}
                    variant="contained"
                >
                    مشاهده
                </Button>
            </Grid>
            <Grid xs={12} sx={{ mt: 1 }} item>
                <ProgressBar id="progressbar" />
            </Grid>
            {responseTime && <Grid xs={12} sx={{ mt: 1 }} item>
                <p style={{textAlign: 'center', color: 'coral'}}>مدت زمان عملیات: {responseTime} ثانیه</p> 
            </Grid>}
        </Grid>
    </SubCard>
);

export default RootLocusParameters;