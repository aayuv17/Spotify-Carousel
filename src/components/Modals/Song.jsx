import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import ModalCarousel from "../Carousel-Modal/Carousel-Modal"
import './Song.scss'
import './Song.css'



function PlayASong(props){
  return(

    <Modal
    isOpen={props.isOpen}
    //onAfterOpen={afterOpenModal}
    onRequestClose={props.onRequestClose}
    contentLabel="Song"
    className="Modal"
    //overlayClassName="Overlay"

    >
    
    <button className="Btn" onClick={props.button}><FontAwesomeIcon icon={faTimes} size="2x" style={{color: "white"}}/></button>
    <iframe className="Frame"
    title="Music" 
     src="https://open.spotify.com/embed/track/7lPN2DXiMsVn7XUKtOW1CS"
     width="300" 
     height="340" 
     frameborder="0" 
     allowtransparency="true" 
     allow="encrypted-media">
       
     </iframe>
    
     <ModalCarousel/>

    </Modal>
    
 
  )
}
export default PlayASong;