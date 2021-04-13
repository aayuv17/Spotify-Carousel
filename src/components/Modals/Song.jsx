import React from "react"
import {Modal} from 'react-bootstrap'
import './Song.scss'
import './Song.css'


function PlayASong(props){
  return(
  <Modal

    show={props.show}
    onHide={props.handleClose}
    aria-labelledby="example-custom-modal-styling-title"
    dialogClassName=" modal-90w"
    centered={true}
    scrollable={false}
  >
    <Modal.Header closebutton />
    
    <Modal.Body className="Box">
    <iframe className="Frame"
    title="Music" 
     src="https://open.spotify.com/embed/track/7lPN2DXiMsVn7XUKtOW1CS"
     width="600" 
     height="500" 
     frameborder="0" 
     allowtransparency="true" 
     allow="encrypted-media">
       
     </iframe>
    </Modal.Body>
  </Modal>)
}
export default PlayASong;