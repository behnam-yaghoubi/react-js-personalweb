import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../assets/images/profiless.jpg';
import { getTranslate, changeLanguage, lang } from '../localization/index';
import { Button } from '@material-ui/core';
import HomeScreen from './homeScreen';
import AboutScreen from './aboutScreen';
import ResumeScreen from './resumeScreen';
import PortfoliosScreen from './portfoliosScreen';
import ContactScreen from './contactScreen';
import './index.css';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        position:'relative'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        margin: theme.spacing(2),
        width: 50,
        height: 50,
        marginLeft: 0,
        borderRadius: 0,
        border: "1px solid #2e344e",
        position: "fixed",
        top: 20,
        zIndex:10000,
        backgroundColor: theme.palette.primary.backgroundColor,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    topDrawer: {
        width: "100%",
        padding: 20,
        borderBottom: "1px solid #2e344e",
        textAlign: "center"
    },
    profileImage: {
        width: 205,
        height: 196,
        borderRadius: 100,
        maxWidth: "100%",
        border: "7px solid #2e344e",
        verticalAlign: "middle"
    },
    drawerPaper: {
        width: drawerWidth,
        // height: "100vh",
        backgroundColor: "#191d2b",
        borderRight: "1px solid #2e344e"
    },
    centerDrawer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    bottomDrawer: {
        padding: 15,
        borderTop: "1px solid #2e344e"
    },
    content: {
        flexGrow: 1,
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        position: 'relative',
        overflow:'auto',
        minHeight:'100vh'
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [page, setPage] = useState(0);
    const translate = getTranslate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div className={classes.topDrawer}>
                <img src={ProfileImage} alt={translate.name} className={classes.profileImage} /> 
            </div>
            <div className={classes.centerDrawer}>
                <List style={{width:"100%"}}>
                    <ListItem className={page===0?null:"listItem"} style={{backgroundColor: page === 0 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0}} 
                        onClick={() => { setPage(0); setMobileOpen(false)}} button>
                            <ListItemText disableTypography={true}
                                children={<Typography className="listItemText" style={{ color: page === 0 ? "#fff" : "#a4acc4" }}
                                variant="body2"> {translate.Menu.home} </Typography>}
                        />
                    <div className = "overlay" > </div>
                    </ListItem>
                    <ListItem className={page===1?null:"listItem"} style={{backgroundColor: page === 1 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0}} 
                        onClick={()=>{setPage(1);setMobileOpen(false)}} button>
                            <ListItemText disableTypography={true}
                                children={<Typography className="listItemText" style={{ color: page === 1 ? "#fff" : "#a4acc4" }}
                                variant="body2"> {translate.Menu.about} </Typography>}
                        />
                    <div className = "overlay" > </div>
                    </ListItem>
                    <ListItem className={page===2?null:"listItem"} style={{backgroundColor: page === 2 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0}} 
                        onClick={()=>{setPage(2);setMobileOpen(false)}} button>
                            <ListItemText disableTypography={true}
                                children={<Typography className="listItemText" style={{ color: page === 2 ? "#fff" : "#a4acc4" }}
                                variant="body2"> {translate.Menu.resume} </Typography>}
                        />
                    <div className = "overlay" > </div>
                    </ListItem>
                    <ListItem className={page===3?null:"listItem"} style={{backgroundColor: page === 3 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0}} 
                        onClick={()=>{setPage(3);setMobileOpen(false)}} button>
                            <ListItemText disableTypography={true}
                                children={<Typography className="listItemText" style={{ color: page === 3 ? "#fff" : "#a4acc4" }}
                                variant="body2"> {translate.Menu.portfolios} </Typography>}
                        />
                    <div className = "overlay" > </div>
                    </ListItem>
                    <ListItem className={page===4?null:"listItem"} style={{backgroundColor: page === 4 ? "#037fff" : "transparent",paddingLeft:0,paddingRight:0}} 
                        onClick={()=>{setPage(4);setMobileOpen(false)}} button>
                            <ListItemText disableTypography={true}
                                children={<Typography className="listItemText" style={{ color: page === 4 ? "#fff" : "#a4acc4" }}
                                variant="body2"> {translate.Menu.contact} </Typography>}
                        />
                    <div className = "overlay" > </div>
                    </ListItem>
                </List>
            </div>
            
            <div className={classes.bottomDrawer}>
                <Button color={lang === "en" ? "primary" : "secondary"} onClick={()=>changeLanguage('en')}>English</Button>
                {'|'}
                <Button color={lang === "fa" ? "primary" : "secondary"} onClick={()=>changeLanguage('fa')}>فارسی</Button>
            </div>
        </>
    );
    const getPage = () => {
        switch (page) {
            case 0:
                return <HomeScreen />
            case 1:
                return <AboutScreen />
            case 2:
                return <ResumeScreen />
            case 3:
                return <PortfoliosScreen />
            case 4:
                return <ContactScreen />
            default:
                return <HomeScreen / >
        }
    }
return (
    <div className={classes.root}>
    <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
    <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
            paper: classes.drawerPaper,
            }}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawer}
        </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
        <Drawer
            classes={{
            paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
        >
            {drawer}
        </Drawer>
        </Hidden>
    </nav>
    <main className={classes.content}>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />
        {getPage()}
    </main>
    </div>
)
}
export default ResponsiveDrawer;

