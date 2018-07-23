import React from 'react'

function Modal(props)
{
	// Se consume la url del video parseandolo anteriormente
	return(
		<div className="modal videomodalcont fade" id="videoModal" role="dialog" aria-labelledby="videoModal"
		aria-hidden="true">
			<div className="modal-dialog modal-lg">
				<div className="modal-content">
					<div className="modal-body">
						<div className='embed-container'>
							<iframe width="100%" height="500px" src={"https://www.youtube.com/embed/"+ props.LinkVideo} frameBorder='0' allowFullScreen></iframe>
							
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
}

export default Modal;