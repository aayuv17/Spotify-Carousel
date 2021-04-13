import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import indoor from '../../images/indoor.jpg'
import Forest from '../../images/forest.jpg'
import Butterfly from '../../images/butterfly.jpg';
import Sky from '../../images/sky.jpg'
import Galaxy from '../../images/galaxy.jpg'
import PlayASong from './../Modals/Song';
import './Carousel.css';
import './Carousel.scss';
import Items from './../Items/Carousel-items';

class DemoCarousel extends Component {
    constructor(props){
        super(props);
        this.state={
            slideshow: true,
            showModal: false,
            changing: false
        }
    }
    handleClose = () => {
        this.setState({
            showModal: false,
            slideshow: true,
            changing: false
        });
        console.log("Start scrolling");
    }
    onClickItemEvent = () => {
        if(this.state.changing===false){
            this.setState({
                slideshow: false,
                showModal: true
            });
            console.log("Stop scrolling");
        }
        else{
            this.setState({
                changing: false
            });
        }
    }
    onChangeEvent = () => {
        this.setState({
            changing: true
        })
        console.log("Something changed");
    }
    render(){
        return (
            <div>
            <PlayASong 
            show = {this.state.showModal}
            handleClose = {this.handleClose}
            />
            <Carousel 
            autofocus 
            infiniteLoop 
            autoPlay 
            useKeyboardArrows 
            interval='14000'
            showIndicators = {false}
            showThumbs = {false}
            showStatus={false}
            transitionTime='7000'
            swipeable={this.state.slideshow}
            onClickItem = {this.onClickItemEvent}
            onChange = {this.onChangeEvent}
            width='100%'
            >
                <Items 
                    src={indoor}
                    alt="indoor"
                    title="Spotify"
                    description='Description'
                />
                <Items 
                    src={Forest}
                    alt="forest"
                    title="Spotify"
                    description='Description'
                />
                <Items 
                    src={Butterfly}
                    alt="butterfly"
                    title="Spotify"
                    description='Description'
                />
                <Items 
                    src={Sky}
                    alt="sky"
                    title="Spotify"
                    description='Description'
                />
                <Items 
                    src={Galaxy}
                    alt="galaxy"
                    title="Spotify"
                    description='Description'
                />
            </Carousel>
            </div>
        );
    }
};

export default DemoCarousel;