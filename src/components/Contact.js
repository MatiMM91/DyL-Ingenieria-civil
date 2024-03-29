import React           from 'react'
import { 
    makeStyles,
    Typography,
    Paper, 
}                      from '@material-ui/core'
import Form            from './Form'

const Contact = ({title,dark,id}) => {
    const classes = useStyles();
  
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography className={classes.title} variant="h3">{title}</Typography>
                <Paper className={classes.paper}>
                    <Form/>
                </Paper>
            </div> 
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "70vh",
        color: "#fff",
        backgroundColor: "#333",
        [theme.breakpoints.down("sm")]: {
            minHeight: "92vh",
          },
    },
    sectiondark: {
        backgroundColor: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        // [theme.breakpoints.down("xs")]: {
        //     maxWidth: "90vw",
        // },
        margin: "0 auto",
        // marginBottom: "50px",
    },
    title: {
        paddingTop: "30px",
        display: "flex",
        justifyContent: "center",
        borderBottom: "4px solid #ffcc00",
        [theme.breakpoints.down("xs")]: {
          fontSize:"2.0rem",
        },
    },
    paper: {
        maxWidth: "300px",
        margin: "auto",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
        backgroundColor: "#F9FBFD",
        fontSize: "1.2rem",
        borderRadius: "10px",
        boxShadow: "6px 6px rgba(0,0,0, 0.2)",
    },
}));

export default Contact
