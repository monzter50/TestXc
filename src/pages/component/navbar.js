import React from 'react'

function Navbar(props){
	return(
	<nav className="navbar-expand-lg navbar navbar-dark bg-dark">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarText">
			<ul className="navbar-nav ml-auto">
				<li className="nav-item active">
					<a className="nav-link " href="#"><i className="fa fa-phone"></i> ATENCIÓN AL CLIENTE</a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="#"><i className="fa fa-user"></i> ACCEDER / REGISTRAR</a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="#"><i className="fa fa-shopping-cart"></i> CARRITO<span className="badge">3</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="#"><span> MXN-$ </span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link " href="#"><img src="//www.xcaret.com.mx/img/flags/espaniol.png" alt="" className="mr-1"/><span> IDIOMA</span></a>
				</li>
			</ul>
		</div>
	</nav>
	)
}
export default Navbar;