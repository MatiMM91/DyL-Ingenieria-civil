import React             from 'react'
import {
    Card, 
    Typography,
    makeStyles
}                        from '@material-ui/core'

const MissionModal = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <Typography
                variant="h4"
                align="center"
            >
                <b>Misión</b>
            </Typography>
            <Typography 
                variant="h6" 
                component="p"
                color='textSecondary'    
            >
                Ofrecer servicios de calidad a la vanguardia en protección del entorno y sostenibilidad. La empresa ha establecido una política de calidad y medio ambiente orientada a conseguir la confianza del cliente, ofreciendole la máxima calidad y respetando el entorno.
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

export default MissionModal
