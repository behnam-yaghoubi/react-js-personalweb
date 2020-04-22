/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection:'column'
    },
    progressDiv: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "100%"
    },
    progress: {
        width: "90%",
        marginLeft: 15,
        height: 6,
        backgroundColor: "#2e344e"
    }
}))
export default function Skill({value, title}) {
    const [val, setVal] = useState(30);
    const classes = useStyles();
    useEffect(() => {
        if (val === value) {
            return;
        }
        setTimeout(() => {
            setVal(val => val+5)
        }, 40);
    }, [val]);

    return (
        <div className={classes.root}>
            <Typography variant="h6" >{title}</Typography>
            <div className={classes.progressDiv}>
                <Typography variant="body1" >{value}%</Typography>
                <LinearProgress className={classes.progress} value={val} variant="determinate" color="primary"></LinearProgress>
            </div>
        </div>
    )
}
