import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        marginBottom: 60,
        height: 75,
        width: "100%",
        zIndex:1
    },
    title: {
        textAlign: 'left',
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            width: 100,
            background: "rgba(3, 127, 255, .3)"
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            width: 35,
            background: '#037fff'
        }
    },
    subtitle: {
        fontSize: '4.5rem',
        position: 'absolute',
        left: 15,
        top: '100%',
        lineHeight: '1rem',
        fontWeight: 900,
        color: 'rgba(25,29,43,.44)',
        display: 'inline-block',
        transform: 'translateY(-40%)',
        zIndex:-1
    }
}))
export default function Title({title}) {
    const classes = useStyles();    
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h2">{title}</Typography>
            <span className={classes.subtitle}>{title}</span>
        </div>
    )
}
