import React from 'react'
import './gallery.styl'
function Gallery(props){

	// Se recibe todas las imagenes de la api
	let ImageSource =  props.source;
	return(
		<div className="modal videomodalcont fade" id="imageModal" role="dialog" aria-labelledby="videoModal"
		aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-body">
						<div className='embed-container'>
							<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
								<div className="carousel-inner">
									{
										//Mapeo el array del las imagenes que fue consumida en el api
										ImageSource.map((elemet,idx)=>(
										

											<div className={"carousel-item"+ (idx === 0 ? ' active':'')}>
												<picture>
													<source media="(max-width: 465px)" srcSet={elemet.source}/>
													<source media="(min-width: 769px)" srcSet={elemet.source}/>
													<img src={elemet.source} alt={elemet.alt} className="d-block w-100"/>
												</picture>
												<div className="carousel-caption d-none d-md-block">
													<h2>{elemet.alt} </h2>
												</div>
											</div>
										
										))		
									}
									
								
								<a className="carousel-control-prev d-none d-md-block" href="#carouselExampleFade" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next d-none d-md-block" href="#carouselExampleFade" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>	
	);
}

export default Gallery;