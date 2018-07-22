import React from 'react'
import './header.styl'
function Header(props){
	return(

		<div className="row my-5">
	
			<div className="container wrapper px-5 d-none d-lg-block">
				<ul className="nav tabs d-flex justify-content-center">
					<div class="selector"></div>
					<li className="nav-item ">
						<a className="nav-link active" href="#">QUIERO</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">SABER MAS <br/>DEL PARQUE ..</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">COMPRAR MI <br/>ENTRADA A ...</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">AHORRAR <br/>MÁS</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">AHORRAR <br/>MÁS</a>
					</li>
				</ul>
		{/*		<nav class="tabs">
					<div class="selector"></div>
					<a href="#" class="active"><span>QUIERO</span></a>
					<a href="#">SABER MAS <br/>DEL PARQUE ..</a>
					<a href="#">COMPRAR MI <br/>ENTRADA A ...</a>
					<a href="#">AHORRAR <br/>MÁS</a>
					<a href="#">AHORRAR <br/>MÁS</a>
				</nav>*/}
		
			</div>	
		</div>

	)
}
export default Header;