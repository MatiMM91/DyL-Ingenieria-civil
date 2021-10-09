import { 
    List,
    ListItemIcon,
    ListItem,
    ListItemText,
    makeStyles,
    Typography 
}                       from '@material-ui/core';
import React            from 'react'
import DoubleArrowIcon  from '@material-ui/icons/DoubleArrow'

const ActivityAreas = ({title,dark,id}) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.title} variant="h3">
                    {title}
                </Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Proyectos de Ingeniería en Obras Civiles e Industriales"
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Construcción"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Soluciones Tecnologías"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Normalizaciones de Especialidades"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Consultorías"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Instalaciones"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Remodelaciones"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon/>     
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h5">
                                        "Mantenimiento"
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
            </div>   
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "68vh",
    },
    sectiondark: {
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90vw",
        },
        margin: "0 auto",
    },
    title: {
        paddingTop: "40px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        borderBottom: "4px solid #ffcc00",
        [theme.breakpoints.down("xs")]: {
            fontSize:"2.0rem",
            marginBottom: "20px",
        },
    },
}));

export default ActivityAreas