import { 
    Grid, 
    Card, 
    CardContent, 
    CardMedia,
    makeStyles, 
    Typography,
}                       from '@material-ui/core'
import React            from 'react'
import mockData         from '../mockData'

const OurWork = ({title,dark,id}) => {
    var classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.title} variant="h3">
                    {title}
                </Typography>
                <Grid container className={classes.grid}>
                    {
                        mockData.map(({title, alt, image, description},index)=>(
                            <Grid key={index} xs={12} sm={6} md={6} lg={4} item>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <CardContent className={classes.media}>
                                            <CardMedia
                                                component="img"
                                                image={image}
                                                alt={alt}
                                            />
                                        </CardContent>
                                        <CardContent>
                                            <Typography
                                                className={classes.cardtitle}
                                                >
                                                {title}
                                            </Typography>
                                            <Typography paragraph className={classes.description}>
                                                {description}
                                            </Typography>
                                        </CardContent>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>    
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "93vh",
    },
    sectiondark: {
        background: "#fff",
        color: "#000",
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
        },
    },
    grid: {
        marginTop: "10px",
        fontSize: "0.8rem",
        [theme.breakpoints.down("xs")]: {
            marginTop: "5px",
        }
    },
    card: {
        margin: theme.spacing(1),
        marginBottom: "50px",
        borderRadius: "18px",
        boxShadow: "0 0 10px -5px",
        overflow: "hidden",
    },
    media: {
        paddin: 0,
    },
    cardtitle: {
        fontWeight: "bold",
        fontSize: "0.8rem",
    },
    description: {
        fontSize: "0.8rem",
        marginTop: "10px",
    }
}));

export default OurWork