import { 
  makeStyles,
  Typography,
  Grid
}                       from '@material-ui/core';
import React            from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import MissionModal     from './MissionModal';
import ValuesModal      from './ValuesModal';
import VisionModal      from './VisionModal';

const AboutUs = ({title,dark,id}) => {
  var classes = useStyles();

  return (
    <div className={
      `${classes.section} 
      ${dark && classes.sectiondark}`
    }>
      <div className={classes.sectioncontent} id={id}>
        <Typography className={classes.title} variant="h3" padding="10">
          {title}
        </Typography>
            <TypeWriterEffect
              text="Somos DyL Ingeniería"
              textStyle={{
                color: "#000",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
              startDelay={100}
              cursorColor="white"
              typeSpeed={80}
              />
            <Typography 
              variant='h5' 
              color='textSecondary'
            >
              DyL Ingeniería Industrial y Obras Civiles es formada en noviembre del año 2018 por dos Ingenieros Civiles, un profesional con 35 años de experiencia otro un joven con 5 años de experiencia.
            </Typography>
            <Grid container xs={12} sm={12} className={classes.grid} item justifyContent="center">
              <MissionModal/>
              <VisionModal/>
              <ValuesModal/>
            </Grid>
      </div>      
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
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
    paddingTop: "10px",
  },
  title: {
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
    borderBottom: "4px solid #ffcc00",
    [theme.breakpoints.down("xs")]: {
      fontSize:"2.0rem",
    },
  },
  grid: {
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
        marginTop: "40px",
    },
  },
}));

export default AboutUs