import React from 'react'

function Gallery(props){
	let ImageSource =  props.source,
	ImageSource =  props.source,
	ImageSource =  props.source
	return(
		<div className="modal videomodalcont fade" id="imageModal" role="dialog" aria-labelledby="videoModal"
		aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-body">

						<div className='embed-container'>
							<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
								<div className="carousel-inner">
									
									<div className="carousel-item active">
										<picture>
											<source media="(max-width: 465px)" srcSet={ImageSource.source}/>
											<source media="(min-width: 769px)" srcSet={ImageSource.source}/>
											<img src={ImageSource.source} alt={ImageSource.alt} className="d-block w-100"/>
										</picture>
										<div className="carousel-caption d-none d-md-block">
											<h2>{ImageSource.alt} </h2>
										</div>
									</div>
									<div className="carousel-item">
										<picture>
											<source media="(max-width: 465px)" srcSet={ImageSource.source}/>
											<source media="(min-width: 769px)" srcSet={ImageSource.source}/>
											<img src={ImageSource.source} alt="Slider" className="d-block w-100"/>
										</picture>
										<div className="carousel-caption d-none d-md-block">
											<h2>{ImageSource.alt} </h2>
										</div>
									</div>
									<div className="carousel-item">
										<picture>
											<source media="(max-width: 465px)" srcSet={ImageSource.source}/>
											<source media="(min-width: 769px)" srcSet={ImageSource.source}/>
											<img src={ImageSource.source} alt="Slider" className="d-block w-100"/>
										</picture>
										<div className="carousel-caption d-none d-md-block">
											<h2>{ImageSource.alt} </h2>
										</div>
									</div>
								</div>
								
								<a className="carousel-control-prev d-none d-md-block" href="#carouselExampleFade" role="button" data-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="carousel-control-next d-none d-md-block" href="#carouselExampleFade" role="button" data-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
							{/*<picture>
								<source media="(max-width: 768px)" srcset="http://www.xcaret.com.mx/img/entradas/nuevas/restaurantes-xcaret.jpg"/>
								<source media="(min-width: 769px)" srcset={ImageSource.source}/>
								<img src={ImageSource.source} alt={ImageSource.alt} class="img-fluid w-100"/>
							</picture>*/}
						</div>
					</div>
				</div>
			</div>
		</div>	


	)
}

export default Gallery;