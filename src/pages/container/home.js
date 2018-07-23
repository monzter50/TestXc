import React, { Component } from 'react';
import Navbar from '../component/navbar.js'
import Header from '../component/header.js'
import SideBar from '../component/sidebar.js'
import Section from '../component/section.js'
import Footer from '../component/footer.js'
import './home.styl';
// Funcion que verifica si el elemento esta vacio y parsea el valor hasta consguir el value del embed 
const video = (element)=>{
	if (element != "") {
		var urlYoutube = (element.split('?')[1])
		var valueUrl= (urlYoutube.split('=')[1])
		var embedUrl= (valueUrl.split('&')[0])
		return embedUrl;
	}
	else{
		var urlYoutube="?";
	}
}
class Home extends Component {
	constructor(props) {
		super(props);
		// Se crea los estados para almacenar los valores del api
		this.state = {
			items: [],
			atractivos: [],
			images: "",
			array:[],
			url:null,
			video:"",
		};
		 fetch('https://experienciasxcaret.github.io/Developers/api/front.json')
        .then(results => {
            return results.json()
        })
        .then( data => {
        	// Se almacena los valores recibidos del api y se distribuye a los componentes
            this.setState({ items: data[0],
            	atractivos:data[0].atractivos, 
            	images:data[0].img[0],
            	url:data[0].CTA,
            	video:data[0].videoYT,
            	array:data[0].img 

            });
           
            	
        });
	}
  render() {
  	// Se renderiza todos los componentes funcionales
    return (
		<div className="App">
			<Navbar/>
			<Header/>
			<div className="container bkg-section">
				<div className="row">
					<Section 
					event={this.state.atractivos} 
					element={this.state.items} 
					image={this.state.array}
					image2={this.state.images}
					video={video(this.state.video)}/>
					<SideBar url={this.state.url}/>
				</div>
			</div>
			<Footer/>
		</div>
    );
  }
}

export default Home;
