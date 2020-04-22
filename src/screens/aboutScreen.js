import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import MainImage from '../assets/images/reactjs.jpg';
import Service from '../components/service';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import CodeIcon from '@material-ui/icons/Code'
import PaletteIcon from '@material-ui/icons/Palette'

const useStyles = makeStyles(theme => ({
    root: {
        // overflow:'auto',
        // height:'100vh'
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            display: "block",
            fontSize: 37
        }
    },
    aboutGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
    },
    mainImage: {
        width: "100%",
        height: "100%"
    },
    imageGrid: {
        position: 'relative',
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            height: "65%",
            width: 15,
            background: "rgba(3, 127, 255, .6)"
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            right: 0,
            bottom: 0,  
            height: "65%",
            width: 15,
            background: "rgba(3, 127, 255, .6)"
        }
    },
    aboutTextGrid: {
        [theme.breakpoints.up('md')]:{
            paddingLeft: 30
        },
        zIndex:1,
        paddingRight: 30,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: 15,
            marginBottom:15
        }
    },
    iconStyle: {
        fontSize: 46,
        color: theme.palette.primary.main
    }
}))

export default function AboutScreen() {
    const classes = useStyles();
    const translate = getTranslate();
    
    return (
        <Grid justify="flex-start" alignItems="flex-start" container className={classes.root}>
            <Grid className={classes.aboutGrid} item container xs={12}>
                <Title title={translate.about.aboutMe} />
                <Grid container direction='row' >
                    <Grid item xs={12} md={6} className={classes.imageGrid}>
                        <img className={classes.mainImage} src={MainImage} alt={translate.name} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutTextGrid}>
                        <Typography variant="h3">{translate.Home.wellcomeMsg} <span className={classes.nameText}>{translate.name}</span>{translate.Home.wellcomeMsg2}</Typography>
                        <Typography variant="body1" style={{marginTop:10}}>
                            {translate.Home.description}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:10}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.fullname}</b>
                            {' : '}
                            {translate.name}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:5}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.age}</b>
                            {' : '}
                            27 {translate.about.years}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:5}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.nationality}</b>
                            {' : '}
                            {translate.about.iranian}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:5}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.languages}</b>
                            {' : '}
                            {translate.about.language}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:5}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.addres}</b>
                            {' : '}
                            {translate.about.addres2}
                        </Typography>
                        <Typography variant="body1" style={{marginTop:5}}>
                            <b style={{ minWidth: 120, display: 'inline-block' }}>{translate.about.phone}</b>
                            {' : '}
                            09396561733
                        </Typography>
                        <Button style={{display:'flex' , marginTop:15}} variant="contained" color="primary">
                            {translate.about.downloadcv}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid className={classes.aboutGrid} item container xs={12}>
                <Title title={translate.services.service} />
                <Grid container direction='row' >
                    <Service
                        icon={<PaletteIcon className={classes.iconStyle} />}
                        title={translate.services.title.webdesign}
                        description={translate.services.description.des1}
                    />
                    <Service
                        icon={<CodeIcon className={classes.iconStyle} />}
                        title={translate.services.title.webdevelopment}
                        description={translate.services.description.des2}
                    />
                    <Service
                        icon={<PhoneAndroidIcon className={classes.iconStyle} />}
                        title={translate.services.title.mobileapplication}
                        description={translate.services.description.des3}
                    />
                </Grid>
            </Grid>
        
        </Grid>
    )
}
