import React        from 'react'
import {
    Avatar,
    List, 
    ListItem,
    ListItemText, 
    makeStyles,
    Typography
}                   from '@material-ui/core';
import { dark }     from '@material-ui/core/styles/createPalette';
import Contacts     from '../Contacts'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent}>
                {
                    Contacts.map(({title, icon, phone}, index)=>(
                    <List key={index} className={classes.contacts}>
                        <ListItem>
                            <Avatar className={classes.media}>
                                { icon }
                            </Avatar>
                            <ListItemText
                                primary={ phone }
                            />
                        </ListItem>
                    </List>
                    ))
                }
                <Typography className={classes.copyright}>
                    © 2021 de DyL Ingeniería. Creado por Matías Manríquez
                </Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "10vh",
    },
    sectiondark: {
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    media: {
        color: "#00bb2d",
        backgroundColor: "#7094a8",
    },
    contacts: {
        position: "absolute",
        right: 10,
    },
    copyright: {
        textAlign: "center",
        paddingTop: "80px",
    },
}));

export default Footer