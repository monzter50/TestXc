import React from 'react'

function ModalGoogle(props)
{
	console.log("modal: "+ props.LinkVideo)
	return(
		<div className="modal videomodalcont fade" id="googleModal" role="dialog" aria-labelledby="googleModal"
		aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-body">
						<div className='embed-container'>
							<iframe src={props.source} width="100%" height="500" frameborder="0" allowfullscreen></iframe>	
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default ModalGoogle;