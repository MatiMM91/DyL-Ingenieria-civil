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
                <Typography className={classes.title} variant="h3" component="h3">
                    {title}
                </Typography>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Proyectos de Ingeniería en Obras Civiles e Industriales"
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Construcción"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Soluciones Tecnologías"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Normalizaciones de Especialidades"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Consultorías"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Instalaciones"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
                                        "Remodelaciones"
                                    </Typography>
                                }
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoubleArrowIcon className={classes.icon}/>     
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{fontSize:'1.2rem',}}>
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
    },
    sectioncontent: {
        maxWidth: "80vw",
        backgroundColor:"#A3A9C6 ",
        borderTopRightRadius: "55px",
        borderBottomRightRadius: "55px",
        boxShadow: "4px 4px rgba(100,100,100, 0.2)",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "90vw",
        },
    },
    title: {
        paddingTop: "40px",
        marginBottom: "15px",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize:"2.0rem",
            marginBottom: "20px",
        },
    },
}));

export default ActivityAreas