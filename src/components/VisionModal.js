import React       from 'react'
import {
    Typography,
    Card,
    makeStyles
}                  from '@material-ui/core'

const VisionModal = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography
                variant="h4"
                align="center"    
            >
                <b>Visión</b>
            </Typography>
            <Typography
                component="p"
                color='textSecondary'
            >
                Lograr la satisfacción y fidelización del cliente, comprometiéndose a establecer un proceso de mejora continua de sus productos y servicios. Adecuarlos a las necesidades presentes y futuras de los clientes, siendo respetuosos con el medio ambiente y de cara al mercado mejorar la competitividad para consolidar la presencia de la empresa en el sector.
            </Typography>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 340,
        padding: theme.spacing(2),
        margin: "0 auto",
        marginBottom: "50px",
        overflow: "hidden",
        boxShadow: "0 0 10px -5px",
        borderRadius: "18px",
        transition: "0.3s",
        animation: "ease-in-out",
        "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 0 10px 0px",
        },
        "& p": {
            fontSize: "1.1rem",
        },
    },
}));

export default VisionModal
