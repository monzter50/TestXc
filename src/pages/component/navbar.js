import React from 'react'
import './navbar.styl'
function Navbar(props){
	return(
		<nav class="navbar navbar-expand-lg p-0 flex-column">
			<div class="mobile pt-lg-0 m-4 m-lg-0 ml-auto d-flex align-items-center">
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					 <div id="menuanim">
					   <span></span>
					   <span></span>
					   <span></span>
					   <span></span>
					 </div>
				</button>
			</div>
			<div className="navup w-100 d-none d-lg-block">
				<div className="container-fluid nav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item  mt-2 active">
							<a className="nav-link " href="#"><i className="fa fa-phone"></i> ATENCIÓN AL CLIENTE</a>
						</li>
						<li className="nav-item mt-2">
							<a className="nav-link " href="#"><i className="fa fa-user"></i> ACCEDER / REGISTRAR</a>
						</li>
						<li className="nav-item mt-2">
							<a className="nav-link " href="#"><i className="fa fa-shopping-cart"></i> CARRITO<span className="badge">3</span></a>
						</li>
						<li className="nav-item mt-2">
							<a className="nav-link " href="#"><span> MXN-$ </span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#"><img src="//www.xcaret.com.mx/img/flags/espaniol.png" alt="" className="mr-1"/><span> IDIOMA</span></a>
						</li>
					</ul>
				</div>
			</div>
			<div className="container py-lg-2  px-lg-5 ">
				<a id="logo" className="navbar-brand" href="#"><img className="logo" src="//www.xcaret.com.mx/img/logos/xcaret.png"/></a>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav pl-lg-5 m-auto mt-5 mt-lg-0">
						<li className="nav-item active ">
							<a className="nav-link text-white mx-lg-2 text-center" href="{{item[1]}}"><span className="sr-only">(current)</span></a>
						</li>						
					</ul>
					<ul className="navbar-nav my-2 my-lg-0">
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
		</nav>

	)
}
export default Navbar;