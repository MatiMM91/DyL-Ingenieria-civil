import React 		from "react";
import { 
	CardMedia,
	makeStyles, 
	Typography } 	from "@material-ui/core";
import topimage 	from "../images/topimage.png";

const Slider = () => {
  var classes = useStyles();

	return (
		<div className={classes.section}>
			<div className={classes.sectioncontent}>
				<CardMedia
					image 		= {topimage}
					component 	= 'img'
					style		= {{height: '100%'}}
					alt 		= {topimage}
				/>
				<div className={classes.topText}>
					<Typography variant="h3" component="h3">
						DyL Ingeniería
					</Typography>
					<Typography variant="h4" component="h4">
						Servicios de Ingeniería Industrial y Obras Civiles
					</Typography>
				</div>
			</div>
		</div>
	);
};

const useStyles = makeStyles((theme) => ({
	section: {
		minHeight: "50vh",
	},
	sectiondark: {
		background: "#fff",
	},
	sectioncontent: {
		height: "50vh",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		alignItems: "center",
		position: "relative",
	},
	topText: {
		background: "rgba(0,0,0,0.2)",
		fontWeight: "bold",
		width: "100%",
		position: "absolute",
		"& h3": {
			paddingLeft: "30px",
		},
		"& h4": {
			paddingLeft: "30px",
			marginTop: "10px",
			fontSize: "2.0rem",
			fontWeight: "bold",
		},
	},
}));

export default Slider;
