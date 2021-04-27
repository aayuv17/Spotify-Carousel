import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import indoor from '../../Images/indoor.jpg'
import Forest from '../../Images/forest.jpg'
import Butterfly from '../../Images/butterfly.jpg';
import Sky from '../../Images/sky.jpg'
import Galaxy from '../../Images/galaxy.jpg'
import Items from './../Items/Carousel-items';
import './Carousel-Modal.css'
import './Carousel-Modal.scss'



//const axios = require('axios');

class ModalCarousel extends Component {
    constructor(props){
        super(props);
        this.state= {
            carousel: []
        }
    }
    componentDidMount(){
        /*axios
            .get('http://localhost:5000/carousel')
            .then((response) => {
                this.setState({
                    carousel: response.data
                })
                console.log("Mounted");
            })
            .catch((err) => {
                console.log(err);
            })*/
    }
    
    render(){

        return (
            <div>
            <Carousel 
            autofocus = {true}
            infiniteLoop = {true}
            autoPlay = {true}
            interval={5000}
            showIndicators = {false}
            showThumbs = {false}
            showStatus={false}
            transitionTime={5000}
            showArrows={false}
            stopOnHover={false}
            width='100%'
            >

                <Items 
                    src={indoor}
                    alt="indoor"
                    title={null}
                    description={null}
                />
                <Items 
                    src={Forest}
                    alt="forest"
                    title={null}
                    description={null}
                />
                <Items 
                    src={Butterfly}
                    alt="butterfly"
                    title={null}
                    description={null}
                />
                <Items 
                    src={Sky}
                    alt="sky"
                    title={null}
                    description={null}
                />
                <Items 
                    src={Galaxy}
                    alt="galaxy"
                    title={null}
                    description={null}
                />
            </Carousel>

            </div>
        );
    }
};

export default ModalCarousel;