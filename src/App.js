import './App.css';
import React          from 'react';
import Navbar         from './components/Navbar';
import AboutUs        from './components/AboutUs';
import OurWork        from './components/OurWork';
import Contact        from './components/Contact';
import ActivityAreas  from './components/ActivityAreas';
import Footer         from './components/Footer';
import Slider         from './components/Slider';

const App = () => {
	return (
		<div >
			<Navbar/>
			<Slider 
				title	= "Slider" 
				id		= "slider" 
				dark	= {false}/>
			<AboutUs 
				title	= "Acerca de Nosotros" 
				id		= "aboutus" 
				dark	= {true}/>
			<ActivityAreas 
				title	= "Áreas de Actividad" 
				id		= "activityareas" 
				dark	= {false}/>
			<OurWork 
				title 	= "Nuestro Trabajo"    
				id 		= "ourwork" 
				dark	= {true}/>
			<Contact 
				title	= "Contacto"           
				id		= "contact" 
				dark	= {false}/>
			<Footer 
				title	= "Pie de Página"       
				id 		= "footer" 
				dark 	= {true}/>
		</div>
	)
}

export default App