import React from "react"
import {Carousel} from 'react-bootstrap'
import './Carousel-items.scss'
import './Carousel-items.css'
function Items(props){
return(
    <div className="Card">
    <img
      className="img"
      src={props.image}
      alt="SONGS"
      onClick={props.playMusic}
    />
    <Carousel.Caption className="caption">
      <h3>{props.label}</h3>
      <p>{props.txt}</p>
    </Carousel.Caption>
  </div>
  )
}

export default Items;