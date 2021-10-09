import React, {useState}  from 'react'
import { makeStyles, Typography }     from '@material-ui/core';
// import Carousel           from 'react-material-ui-carousel'
import {images}           from '../helpers/CarouselData'

const Slider = () => {
  var classes = useStyles();
  const [currImg] = useState(0)

  return (
    <div className={classes.section}>
      <div 
        className={classes.sectioncontent}
        style={{ backgroundImage: `url(${images[currImg].img})` }} 
      >
        <div 
          style={{ 
            background: "rgba(0,0,0,0.2)",
            width: "100%",
          }}
        >
          <div className={classes.carouselText}>
            <Typography 
              variant="h3" 
              component="h3"
            >
              DyL Ingeniería
            </Typography>
            <Typography 
              variant="h4" 
              component="h4"
            >
              Servicios de Ingeniería Industrial y Obras Civiles
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: "50vh",
    },
    sectiondark: {
      background: "#fff",
    },
    sectioncontent: {
      height: "50vh",
      background: "#000",
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
    },
    carouselText: {
      margin: '0 auto',
      marginLeft: '5%',
      fontWeight:"bold",
      "& h4": {
        marginTop: "10px",
        fontSize:"2.0rem",
        fontWeight:"bold",
      },
    },
}));

export default Slider
