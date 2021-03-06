import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import { gridSpacing } from "store/constant";
import ChapterSelectDarkCard from "./ChapterSelectDarkCard";
import { routes } from "config";

// ==============================|| DEFAULT Home Page ||============================== //

const sections = [
    {
        title: "فصل دوم",
        subtitle: "نمایش سیستم های کنترلی",
        link: `${routes.root}${routes.chapter}02/${routes.hydraulic_systems_modeling}`,
    },
    {
        title: "فصل سوم",
        subtitle: "تحلیل عملکرد گذرا و ماندگار سیستم های کنترلی",
        link: `${routes.root}${routes.chapter}03/${routes.fst_order_tf}`,
    },
    {
        title: "فصل چهارم",
        subtitle: "پایداری",
        link: `${routes.root}${routes.chapter}04/${routes.hurwitz_criterion}`,
    },
    {
        title: 'فصل پنجم',
        subtitle: 'مکان هندسی',
        link: `${routes.root}${routes.chapter}05/${routes.root_locus}`
    },
    {
        title: 'فصل ششم',
        subtitle: 'پاسخ فرکانسی',
        link: `${routes.root}${routes.chapter}06/${routes.rc_filter_frequency_response}`

    },
    {
        title: 'فصل هفتم',
        subtitle: 'طراحی سیستم های کنترل خطی',
        link: `${routes.root}${routes.chapter}05/${routes.root_locus}`
        
    },
    
];
const HomePage = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    {sections.map((section) => (
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <ChapterSelectDarkCard
                                title={section.title}
                                subtitle={section.subtitle}
                                link={section.link}
                                isLoading={isLoading}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomePage;
