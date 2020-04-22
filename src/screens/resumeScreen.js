import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import Skill from '../components/skill';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Steppers from '../components/Steppers';


const useStyles = makeStyles(theme => ({
    root: {
        // overflow:'auto',
        // height:'100vh'
    },
    skillGrid: {
        paddingTop: 60,
        // paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 5,
            paddingLeft: 5,
        }
    },
    skillSecondTitle:{
        marginLeft:10
    }
}))

export default function ResumeScreen() {
    const classes = useStyles();
    const translate = getTranslate();
    
    return (
        <Grid justify="flex-start" alignItems="flex-start" container className={classes.root}>
            <Grid className={classes.skillGrid} item container xs={12}>
                <Title title={translate.resumePage.myskills} />
                <Grid container direction='row' >
                    <Grid item xs={12} md={6} >
                        <Skill value={80} title={"HTML5"} />
                        <Skill value={90} title={"CSS3"} />
                        <Skill value={85} title={"JavaScript"} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Skill value={95} title={"Node Js"} />
                        <Skill value={65} title={"PHP"} />
                        <Skill value={75} title={"React Js"} />
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid className={classes.skillGrid} item container xs={12}>
                <Title title={translate.resumePage.myresume} />
                <Grid container direction='row' justify="flex-start" alignItems="center">
                    <BusinessCenterIcon style={{ fontSize:34 }} />
                    <Typography variant="h4" className={classes.skillSecondTitle}>
                        {translate.workingexperience}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 15 }}>
                <Steppers steps={translate.workingSteps} />
            </Grid>

            <Grid className={classes.skillGrid} item container xs={12}>
                
                <Grid container direction='row' justify="flex-start" alignItems="center">
                    <LocalLibraryIcon style={{ fontSize:34 }} />
                    <Typography variant="h4" className={classes.skillSecondTitle}>
                    {translate.educationalqualifications}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: 15 }}>
                <Steppers steps={translate.educationalSteps} />
            </Grid>

        </Grid>
    )
}
