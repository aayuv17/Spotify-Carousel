import React from "react"
import './Carousel-items.scss'
import './Carousel-items.css'


function Items(props){
return(
    <div>
      <img src={props.src} alt={props.alt} className='standard-size'/>
      <div className='playlist-title'>
        {props.title}
      </div>
      <div className='description'>
        {props.description}
      </div>
    </div>
  )
}

export default Items;