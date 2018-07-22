import React from 'react'
import './sidebar.styl'
function SideBar(props){
	return(
		<aside className="col-12 col-lg-4 order-lg-2" id="asidetours">
			<div className="row">
				<div className="col-12">
					<h1>COMPRA AQUÍ</h1>
					<p>Y obtén hasta un 15% de descuento</p>
				</div>
				<div className="col-12">
					<h4>NOMBRE DEL PRODUCTO</h4>
					<p>Precio regular:</p>
					<p>$0,000.00 MXN</p>
				</div>
				<div className="col-12 my-2">
					<input type="checkbox" name="vehicle1" value="Bike"/> Más Transportación:  $0,000.00 MXN 
				</div>
				<div className="col-12 my-2">
					<input type="checkbox" name="vehicle1" value="Bike"/> Más Transportación:  $0,000.00 MXN 
				</div>
				<div className="col-12 my-2">
					<input type="checkbox" name="vehicle1" value="Bike"/> Más Transportación:  $0,000.00 MXN 
				</div>
				<div className="col-12 my-2">
					<a class="btn-360 btn-block" href={props.url}>COMPRA AHORA</a> 
				</div>
				<div className="col-12 my-5">
					<p><small>*Copyright 1999-2050 by Refsnes Data<br/>
					15% de descuento -reservando con 21 días o más de anticipación.<br/>
					*Precios sujetos a cambios sin previo aviso.</small></p> 
				</div>
				<div className="col-12 my-5">
					<h4 className="text-center my-5">¿Porqué reservar con nosotros?</h4>
					<div className="row d-flex justify-content-center">
						<div className="col-4">
							<span className="text-center"><h5 className="text-center">-10%</h5>
							<p className="text-center">EN TU COMPRA*</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center">-15%</h5>
							<p className="text-center">EN TU COMPRA*</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center">-50%</h5>
							<p className="text-center">PARA NIÑOS*</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-credit-card"></i></h5>
							<p className="text-center">MESES SIN INTERESES</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-lock"></i></h5>
							<p className="text-center">COMPRA SEGURA</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-dollar "></i></h5>
							<p className="text-center">PRECIO + BAJO GARANTIZADO</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-bolt"></i></h5>
							<p className="text-center">TAQUILLAS ESPECIALES</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-cloud"></i></h5>
							<p className="text-center">GARANTIA MAL CLIMA</p></span>
						</div>
						<div className="col-4">
							<span className="text-center"><h5 className="text-center"><i className="fa fa-shield"></i></h5>
							<p className="text-center">SEGURO DE VIAJE</p></span>
						</div>
					</div>
				</div>
			</div>
		</aside>

	)
}
export default SideBar;