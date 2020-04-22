import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import './contact.css'
import Contact from '../components/contact';
import CallIcon from '@material-ui/icons/Call';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        // overflow:'auto',
        // height:'100vh'
    },
    contactGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingRight: 30,
        paddingLeft: 30,
        [theme.breakpoints.down('xs')]:{
            paddingRight: 5,
            paddingLeft: 5,
        }
    },
    formGrid:{
        padding:10,
        zIndex:10
    },
    detailsGrid:{
        padding:10,
        zIndex: 10
    },
    getintouch:{
        textAlign:'left'
    },
    textField:{
        marginTop:25,
        backgroundColor: "#10121b"
    },
    iconStyle:{
        fontSize:35,
        color:"#fff"
        
    }
}))

export default function ContactScreen() {
    const classes = useStyles();
    const translate = getTranslate();
    
    return (
        <Grid justify="flex-start" alignItems="flex-start" container className={classes.root}>
            <Grid className={classes.contactGrid} item container xs={12}>
                <Title title={translate.contactpage.contact} />
                <Grid container direction='row' >

                    <Grid item xs={12} md={6} className={classes.formGrid}>
                        <Typography className={classes.getintouch} variant="h4">{translate.contactpage.getintouch}</Typography>
                        <TextField
                            className={classes.textField}
                            fullWidth
                            required
                            label={translate.contactpage.enteryourname}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth
                            required
                            label={translate.contactpage.enteryouremail}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth
                            required
                            label={translate.contactpage.enteryoursubject}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth
                            required
                            label={translate.contactpage.enteryourmessage}
                            variant="outlined"
                            multiline ={true}
                            rows={7}
                        />
                        < Button 
                            style = {{display: 'flex',marginTop: 25}}
                            variant = "contained"
                            color = "primary"
                            size = "large" >
                            {translate.contactpage.sendmessage}
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.detailsGrid}>
                        <Contact
                            icon={<CallIcon className={classes.iconStyle}/>}
                            title={translate.contactpage.phone}
                            text1="+012-3456-7891"
                            text2="+012-3456-7892"
                        />
                        <Contact
                            icon={<EmailOutlinedIcon className={classes.iconStyle}/>}
                            title={translate.contactpage.email}
                            text1="admin1@gmai.com"
                            text2="admin2@gmai.com"
                        />
                        <Contact
                            icon={<RoomOutlinedIcon className={classes.iconStyle}/>}
                            title={translate.contactpage.address}
                            text1={translate.contactpage.addressDetail}
                            text2=""
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
