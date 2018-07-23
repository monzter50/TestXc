import React from 'react';
import './header.styl';

function Header(props){
	return(
		<div className="container d-none d-md-block">
			<div className="row my-5">
			
				<div className="processes-block">
					<a className="processes-item active " data-tab="step1_sourcing_responsive">
						<span className="process-icon"></span>
						<span className="title text-center">QUIERO</span>

						{/*<span className="description">The process of acquiring goods and / or services</span>*/}
					</a>
					<a className="processes-item " data-tab="step2_sourcing_responsive">
						<span className="process-icon"></span>
						<span className="title text-center">SABER MAS <br/>DEL PARQUE ...</span>
					</a>
					<a className="processes-item ">
						<span className="process-icon"></span>
						<span className="title text-center">COMPRAR MI <br/>ENTRADA A ...</span>
					</a>
					<a className="processes-item ">
						<span className="process-icon"></span>
						<span className="title text-center">COMPRAR MI <br/>ENTRADA A ...</span>
					</a>
				</div>
			</div>
		</div>
	)
}
export default Header;