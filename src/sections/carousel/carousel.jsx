import React, { useState } from "react"
import './carousel.scss'
import './carousel.css'
import {Carousel,Container} from 'react-bootstrap'
import indoor from '../../Images/indoor.jpg'
import Forest from '../../Images/forest.jpg'
import Butterfly from '../../Images/butterfly.jpg'
import Sky from '../../Images/sky.jpg'
import Galaxy from '../../Images/galaxy.jpg'
import Items from '../../components/Items/Carousel-items'
import Song from '../../components/Modals/Song';

function Slider() {
  // const [display,setdisplay]=useState(false)
  const [show, setShow] = useState(false);
  function playMusic()
  {
     if (show===false)
        setShow(true);
      else
        setShow(false);
  }
return(
<div>
 <Song
   show= {show}
   playMusic={playMusic}
/>


<Container fluid className="back">
<Carousel
style={{opacity:show? 0.5:1}}>
  <Carousel.Item>
  <Items 
    image={indoor}
    label="First slide label"
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    playMusic={playMusic}
  />
  </Carousel.Item>
  <Carousel.Item>
  <Items 
    image={Butterfly}
    label="Second slide label"
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    playMusic={playMusic}
  />
  </Carousel.Item>
  <Carousel.Item>
  <Items 
    image={Sky}
    label="Third slide label"
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    playMusic={playMusic}
  />
  </Carousel.Item>
  <Carousel.Item>
  <Items 
    image={Galaxy}
    label="Fourth slide label"
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    playMusic={playMusic}
  />
  </Carousel.Item>
  <Carousel.Item>
  <Items 
    image={Forest}
    label="Fourth slide label"
    txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    playMusic={playMusic}
  />
  </Carousel.Item>
  
 
</Carousel>

</Container>
</div>
)
}
export default Slider;