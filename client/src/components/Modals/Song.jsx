import React, { Component ,useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import Customize from './customize'
import Canvas from './../canvas/canvas';
import Modal from 'react-modal';
import './Song.scss'
import './Song.css'
import axios from "axios";



class PlayASong extends Component{

  constructor(props){
    super(props);
    this.state = {
      modal: [],
      showModal: false
    }
  }
  handleClose = () => {
    this.setState({
        showModal: false,
    });
}

  onClickEvent= ()=>{
    this.setState({
      showModal:true
    })
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/modal/'+this.props.index)
      .then((response) => {
        this.setState({
          modal: response.data
        });
        console.log(this.state.modal);
      })
      .catch((err) => {
        console.log(err)
      });
    }

  render(){
    const customStyles = {
      content : {
        backgroundColor: '#000000'
      }
    };
  return(
    <div>
    
    <Modal
    isOpen={this.props.isOpen}
    onRequestClose={this.props.onRequestClose}
    contentLabel="Song"
    className="Modal"
    style={customStyles}
    >

    <Canvas className='Modal animation' />
    <button className="Btn" onClick={this.props.button}>
      <FontAwesomeIcon icon={faTimes} size="2x" style={{color: "white"}}/>
    </button>

    

    <iframe className="frame"
      title="Music" 
      src={this.state.modal.embed_url}
      width="300" 
      height="380" 
      frameborder="0" 
      allowtransparency="true" 
      allow="encrypted-media"
      
    > 
  </iframe>
  
  <button className="add">
    <FontAwesomeIcon icon={faPlusCircle} size="2x" style={{color: "white"}} />  
    <br></br>    
     <strong>Add to Playlist</strong>
     </button>

  <button className="customise" onClick={this.onClickEvent}>
    <FontAwesomeIcon icon={faPalette} size="2x" style={{color: "white"}} /> 
    <br></br>        
     <strong>Customize</strong>
     </button>

    </Modal>
    <Customize
      isOpen={this.state.showModal}
      onRequestClose={this.handleClose}
    />
    </div>
 
  )
}
}
export default PlayASong;