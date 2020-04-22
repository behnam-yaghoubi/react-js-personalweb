import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 20,
        zIndex:1
    },
    main: {
        backgroundColor: "#191d2b",
        // zIndex: 1,
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        transition: ".4s",
        padding: theme.spacing(8),
        "&:hover": {
            borderTopColor: theme.palette.primary.main,
            transition: ".4s"
        }
    },
    title: {
        marginTop: 15,
        position: "relative",
        paddingBottom: 15,
        "&::before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
            height: 2,
            width: 50,
            background: "#2e344e"
        }
    },
    description: {
        marginTop: 15,
        
    }
}))
export default function Service({icon, title, description}) {
    const classes = useStyles();
    return (
        <Grid item lg={4} md={6} xs={12} className={classes.root}>
            <Grid container className={classes.main} direction="column" alignItems="flex-start">
                {icon}
                <Typography className={classes.title} variant="h5">{title}</Typography>
                <Typography className={classes.description} variant="body1" >
                    {description}
                </Typography>
            </Grid>
        </Grid>
    )
}
