import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width:"100%",
        paddingTop:20
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
        textAlign:'left'
        
    },
    description: {
        cursor:'pointer',
        transition:".5s",
        "&:hover":{
            color:theme.palette.primary.main,
            transition:".5s"
        }
    },
    divIcon:{
        margin:10,
        padding:18,
        border:"1px solid #2e344e",
        marginRight: 25,
        paddingBottom: 14
    },
    divDetails:{
        display:'flex',
        flex:1,
        flexDirection:'column'
    }
}))
export default function Contact({icon, title, text1, text2}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.main} justify="flex-start" direction="row" alignItems="center">
                <div className={classes.divIcon}>
                    {icon}
                </div>
                <div className={classes.divDetails}>
                    <Typography className={classes.title} variant="h6">{title}</Typography>
                    <Typography className={classes.description} variant="body1" >
                        {text1}
                    </Typography>
                    <Typography className={classes.description} variant="body1" >
                        {text2}
                    </Typography>
                </div>
            </Grid>
        </div>
    )
}
