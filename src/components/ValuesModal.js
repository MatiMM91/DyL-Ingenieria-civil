import React            from 'react'
import { 
    List, 
    Card, 
    Typography,
    makeStyles
}                       from '@material-ui/core'

const ValuesModal = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <Typography
                variant="h4"
                align="center"
                
            >
                <b>Valores</b>
            </Typography>
            <List>
                <Typography
                    variant="h6" 
                    component="p"
                    color='textSecondary'
                >
                <b>TECNOGÍA E INNOVACIÓN:</b> Llevar la innovación a través de la tecnología a todos sus proyectos para hacerlos más sostenibles.
                </Typography>
                <br/>
                <Typography 
                    variant="h6" 
                    component="p"
                    color='textSecondary'
                >
                <b>EFICIENCIA:</b> Los trabajos siempre se llevan a cabo teniendo como referencia la consecución de la mayor eficiencia Integral.
                </Typography>
                <br/>
                <Typography
                    variant="h6" 
                    component="p"
                    color='textSecondary'  
                >
                <b>CALIDAD TOTAL:</b> Mantener una excelencia en la calidad del trabajo teniendo en cuenta su impacto en el medio ambiente. 
                </Typography>
            </List>
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

export default ValuesModal
