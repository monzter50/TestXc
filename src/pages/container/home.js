import React, { Component } from 'react';
import Navbar from '../component/navbar.js'
import Header from '../component/header.js'
import SideBar from '../component/sidebar.js'
import Section from '../component/section.js'
import Footer from '../component/footer.js'
import './home.styl';

const video = (element)=>{
	if (element == "") {
		param="?";
	}
	else{
		var param = (element.split('?')[1])
		var para2= (param.split('=')[1])
		var para3= (para2.split('&')[0])
		return para3;
		console.log("param: "+ para3)
	}
}
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			atractivos: [],
			images: "",
			images2: "",
			images3: "",
			images4: "",
			images5: "",
			url:null,
			video:"",
		};
		 fetch('https://experienciasxcaret.github.io/Developers/api/front.json')
        .then(results => {
            return results.json()
        })
        .then( data => {
        	console.log(data[0]);
            this.setState({ items: data[0],
            	atractivos:data[0].atractivos, 
            	images:data[0].img[0],
            	images2:data[0].img[1],
            	images3:data[0].img[2],
            	images4:data[0].img[3],
            	images5:data[0].img[4],
            	url:data[0].CTA,
            	video:data[0].videoYT });
           
            	
        });
	}
  render() {

    return (
      <div className="App">
		<Navbar/>
		<Header/>
		<div className="container">
			<div className="row">
				<Section 
				event={this.state.atractivos} 
				element={this.state.items} 
				image={this.state.images}
				image2={this.state.images2}
				image3={this.state.images3}
				image4={this.state.images4}
				image5={this.state.images5}
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
