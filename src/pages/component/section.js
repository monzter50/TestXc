import React from 'react'
import Modal from '../../widgets/component/modal.js'
import Gallery from '../../widgets/component/gallery.js'
import './section.styl'
function openModal() {
	// document.getElementById('myModal').style.display = "block";
	console.log("click openModal")
}
function Section(props){
	let element = props.element;
	var image = props.image;
	var video =props.video;
	console.log("component video: "+video);
	// var param =(video.split('/'))
	// console.log(param)
	return(
		<div className="col-12 col-lg-8 mt-lg-5 pt-lg-5 order-lg-2">
			<div className="row">
				<ol className="col-12 col-lg-6 breadcrumb profile mb-0">
					<li className="breadcrumb-item"><a href="">Inicio</a></li>
					<li className="breadcrumb-item active">{element.seccion}</li>
				</ol>
			</div>
			<div className="row">
				<div id="ProfileTour" className="carousel slide" data-ride="carousel">
					
						<a href="" className="video" data-toggle="modal"
                       data-target="#videoModal">
                        <img src="src/img/play-button.svg"  alt=""/>
						<center>
							<img src="https://mayanmonkey.com/img/video-player.svg"  width="80"/>
						</center>
						</a>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<picture>
								<source media="(max-width: 768px)" srcset="http://www.xcaret.com.mx/img/entradas/nuevas/restaurantes-xcaret.jpg"/>
								<source media="(min-width: 769px)" srcset={image.source}/>
								<img src={image.source} alt={image.alt} class="img-fluid w-100"/>
							</picture>
							{/*<iframe className="videoFrame" src={"https://www.youtube.com/embed/"+video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>*/}
						</div>
					</div>
				</div>
				
			</div>
			<div className="row">
					
					<div className="col-6 px-0">
						<a class="btn-link  btn-block" data-toggle="modal"
                       data-target="#imageModal"><i className="fa fa-image"></i> Ver imágenes</a>
					</div>
					<div className="col-6  px-0">
						<a class="btn-360 btn-block" href={element.maps360}><i className="fa fa-eye"></i> Vista 360º</a>
					</div>
			</div>
			<div className="row my-3">
					
					<div className="col-12">
						<h1>{element.tituloH1}</h1>
					</div>
					<div className="col-12">
						<p>{element.descripcion}</p>
					</div>

			</div>
			<div className="row my-3">	
				<div className="col-12">
					<h2>Atractivos principales</h2>
				</div>
				{
					props.event.map((index, elem)=> 					
						<div className="row my-3">
							<div className="col-12 col-lg-6">
								<a href={index.link}><img src={index.img} className="w-100"  height="300"/></a>
							</div>
							<div className="col-12 col-lg-6">
								<h3 className="mt-lg-5 mt-1">{index.titulo}</h3>
								<p>{index.desc}</p>
							</div>	

						</div>	
					)
				}
				
				
			</div>
			<div className="row my-5 d-flex justify-content-end">
					<div className="col-6">
						<a className="btn-link btn-block" href="#"> Cotizar mi entrada</a>
					</div>	
			</div>	
			<div className="row my-5">
			
				<div className="col-3 px-0">
					<span>HASTA 9 MESES<br/>SIN INTERESES</span>
				</div>	
				<div className="col-9 px-0">
					 <a  href="#"><img src="//www.xcaret.com.mx/img/msi.png" className="img-fluid"/></a>
				</div>
				<div className="col-12 my-2 px-0">
					 Con los principales bancos y tarjetas emitidas en México. No aplica con Paypal.<a  href="#"> Ver opciones »</a>
				</div>		
			</div>
			<Modal LinkVideo={video}/>
			<Gallery source={image}/>
		</div>

	)
}
export default Section;