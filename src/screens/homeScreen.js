import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import './home.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { getTranslate } from '../localization/index';

const useStyles = makeStyles(theme => ({
    root:{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            display: "block",
            fontSize:37
        }
    },
    divIcons: {
        marginTop: 25
    },
    iconButtonStyle: {
        border: "2px solid #2e344e",
        marginRight:8,
        marginLeft: 8,
        transition: ".7s",
        "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            transition: ".8s"
        }
    }
}))

export default function HomeScreen() {
    const classes = useStyles();
    const translate = getTranslate();
    return (
        <div className={classes.root}>
            <div id="stars"></div>
            <div id="stars1"></div>
            <div id="stars2"></div>
            <Grid>
                <Typography variant="h1">{translate.Home.wellcomeMsg} <span className={classes.nameText}>{translate.name}</span>{translate.Home.wellcomeMsg2}</Typography>
                <Typography variant="subtitle1">
                    {translate.Home.description}
                </Typography>
                <div className={classes.divIcons}>

                    <IconButton color="secondary" className={classes.iconButtonStyle}>
                        <TelegramIcon />
                    </IconButton>

                    <IconButton color="secondary" className={classes.iconButtonStyle}>
                        <LinkedInIcon />
                    </IconButton>

                    <IconButton color="secondary" className={classes.iconButtonStyle}>
                        <GitHubIcon />
                    </IconButton>

                </div>
            </Grid>
        </div>
    )
    
}
