import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Typography, Modal } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root:{
        padding:15,
        display:'flex',
        flexDirection: 'column',
        marginBottom: 15,
        zIndex: 10
    },
    image:{
        width:"100%",
        cursor:'pointer',
        "&:hover":{
            transform:"rotate(360deg)",
            transition:".7s"
        }
    },
    title:{
        cursor:'pointer',
        textAlign:'left',
        "& a":{
            textDecoration:'none',
            color:"#fff",
            transition:'.5s',
            "&:hover":{
                color: theme.palette.primary.main,
                transition:'.5s'
            }
        }
    },
    ModalImage:{
        width:"100%",
        height:"100%"
    },
    modal:{
        width:"60%",
        height:"80%",
        display:'flex',
        margin:'auto',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{
            width:"70%",
            height:"60%",
        }
    }
}))
export default function Portfolio({image, title, desc, href}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <Grid item lg={4} className={classes.root}>
                <img
                    onClick={()=>setOpen(true)}
                    className={classes.image} src={image} alt="post"
                />
                <Typography className={classes.title} variant="h5">
                    <a href={href}>{title}</a>
                </Typography>
            <Typography variant="body1" >{desc}</Typography>
            </Grid>
            <Modal className={classes.modal} open={open} onClose={()=>setOpen(false)}>
                <img className={classes.ModalImage} src={image} alt="post" />
            </Modal>
        </>
    )
}
