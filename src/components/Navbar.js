import React, { useState }      from 'react';
import { AppBar, 
    IconButton, 
    makeStyles, 
    Toolbar,
    Drawer, 
    Divider, 
    ListItem, 
    ListItemIcon }              from '@material-ui/core';
import {
    Link, 
    animateScroll as scroll
}                               from 'react-scroll';
import InfoIcon                 from '@material-ui/icons/Info';
import BuildTwoToneIcon         from '@material-ui/icons/BuildTwoTone';
import ContactMailTwoToneIcon   from '@material-ui/icons/ContactMailTwoTone';
import MenuIcon                 from '@material-ui/icons/Menu';
import ExpandLessIcon           from '@material-ui/icons/ExpandLess';
import DescriptionIcon          from '@material-ui/icons/Description';
import { List }                 from '@material-ui/core';
import dyl                      from '../images/logo_dyl2.png';

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: "aboutus",
            text: "Acerca de Nosotros",
            icon: <InfoIcon fontSize="large" className={classes.iconStyle}/>
        },
        {
            id: "activityareas",
            text: "Áreas de Actividad",
            icon: <DescriptionIcon fontSize="large" className={classes.iconStyle}/>
        },
        {
            id: "ourwork",
            text: "Nuestro Trabajo",
            icon: <BuildTwoToneIcon fontSize="large" className={classes.iconStyle}/>
        },
        {
            id: "contact",
            text: "Contacto",
            icon: <ContactMailTwoToneIcon fontSize="large" className={classes.iconStyle}/>
        },
    ]

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return(
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={`${classes.bgnav} ${classes.toolbar}`}>
                <List className={classes.menuLogo}>
                    <img 
                        src={dyl} 
                        className={classes.media}
                        alt={dyl}
                        onClick={scrollToTop}    
                    />
                    <h2 onClick={scrollToTop}>Ingeniería</h2>
                </List>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index)=>(
                            <Link key={index} 
                                to={id} 
                                spy={true} 
                                activeClass="active" 
                                smooth={true} 
                                duration={500} 
                                offset={-70}>
                                    {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton 
                    className={classes.menuButton} 
                    edges       = "end"
                    onClick     = {()=>setOpen(!open)}
                    name        = 'menubutton'
                    aria-label  = 'menubutton'
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
           </Toolbar>
        </AppBar>
        <Drawer anchor="top" className={classes.drawer} open={open} onClose={()=>setOpen(false)}>
            <Divider/>
            <ExpandLessIcon className={classes.cancelIcon} onClick={()=>setOpen(false)} fontSize="large"/>
            {
                links.map(({id, text, icon}, index)=>(
                    <Link key={index}
                        to={id}
                        className={classes.sidebar}
                        spy={true} 
                        activeClass="active" 
                        smooth={true} 
                        duration={500} 
                        offset={-70}>
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                            </span>
                            {text}
                        </ListItem>
                    </Link>
                ))
            }
        </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    bgnav: {
        backgroundColor: "#F9FBFD",
    },
    toolbar: {
        "& h2": {
            color: "black",
            paddingLeft: "5px",
            paddingTop: "12px",
            
            "&:hover": {
                cursor: "pointer",
            }
        }
    },
    menuLogo: {
        display: "flex",
        justifyContent: "flex-start",
    },
    media: {
        height: "60px",
        "&:hover": {
            cursor: "pointer",
        }
    },
    menu: {
        position: "absolute",
        right: 10,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        "& a": {
            fontSize: "1.2rem",
            color: "black",
            fontWeight: "bold",
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#ffcc00",  
        },
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#e30613",
            position: "absolute",
            top: 10,
            right: 10,
        }
    },
    sidebar: {
        backgroundColor: "#F9FBFD",
        color: "#000",
        top: 0,
        "& h5": {
            margin: theme.spacing(0,0,0,0),
            fontSize: "1.4rem",
            fontWeight: "bold",
        },
        "& h5:hover": {
            cursor: "pointer",
            color: "#ffcc00",  
            backgroundColor: "#eee",
        }
    },
    cancelIcon: {
        color: "#000",
        backgroundColor: "#F9FBFD",
        display: "inline-block",
        top: 0,
        right: 0,
        width: "100%",
        "&:hover": {
            cursor: "pointer",
        }
    },
    iconStyle: {
        color: "#ffcc00",

    },
}));

export default Navbar;