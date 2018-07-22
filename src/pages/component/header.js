import React from 'react'
import './header.styl'
function Header(props){
	return(

		<div className="row">
			<div className="container px-5">
				<div className="row mt-5">
				<div className="col-4">
					<img src="//www.xcaret.com.mx/img/logos/xcaret.png" className="img-fluid"/>
				</div>
				<div className="col-8 ">
						<ul className="nav wrapper">
							<li className="nav-item active">
								<a className="nav-link " href="#"><i className="fa fa-phone"></i> INICIO</a>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="#"><i className="fa fa-user"></i> MIS FOTOS</a>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="#">PREGUNTAS FRECUENTE</a>
							</li>
							
							<li className="nav-item d-flex">
								<a className="nav-link px-1" href="#"><i className="fa fa-facebook"></i></a>
								<a className="nav-link px-2" href="#"><i className="fa fa-twitter"></i></a>
								<a className="nav-link px-2" href="#"><i className="fa fa-instagram"></i></a>
								<a className="nav-link px-2" href="#"><i className="fa fa-youtube"></i></a>
								<a className="nav-link px-2" href="#"><i className="fa fa-pinterest"></i></a>
							</li>
						</ul>
		
				</div>
				</div>
			</div>
			<div className="container wrapper px-5 d-none d-lg-block">
				<nav class="tabs">
					<div class="selector"></div>
					<a href="#" class="active"><span>QUIERO</span></a>
					<a href="#">SABER MAS <br/>DEL PARQUE ..</a>
					<a href="#">COMPRAR MI <br/>ENTRADA A ...</a>
					<a href="#">AHORRAR <br/>MÁS</a>
					<a href="#">AHORRAR <br/>MÁS</a>
				</nav>
				{/*<nav className="navbar navbar-expand-lg" role="navigation">
					<div className="navbar-ex1-collapse">

						<ul className="nav navbar-nav" id="navbar-main">
							<li className="mnu-quiero border-menu">
								<a className="main-menu-item">
									<b>QUIERO</b>
								</a>
							</li>
							
							<li className="border-menu">
								<a href="#">Saber más de<br/><b>XCARET</b></a>
							</li>

							<li className="border-menu">
								<a href="#">Comprar mi<br/>entrada a <b>XCARET</b></a>
								
							</li>
							<li className="border-menu">
								<a href="#">Ver las Atracciones<br/><b>XCARET</b></a>	
							</li>
							<li className="border-menu">
								<a href="#">AHORRAR MÁS</a>
							</li>
							<li className="border-menu">
								<a href="#">HOTEL<br/> XCARET</a>
							</li>
							<li className="border-menu">
								<a href="#" >Ver la galería de<br/><b>XCARET</b></a>
							</li>
							
						</ul>
						
					</div>			
				</nav>*/}
			</div>	
		</div>

	)
}
export default Header;