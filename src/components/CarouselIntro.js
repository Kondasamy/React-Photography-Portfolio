import React from 'react';
import ReactDOM from 'react-dom'
import {
    Mask, Row, Col, Fa, Button, View, Container,
    Carousel, CarouselCaption, CarouselInner, CarouselItem
} from 'mdbreact';
import './css/App.css'
// import Slideshow from './Slideshow';
// import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from "react-parallax";
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Bounce } from 'react-motions'
// import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
// import FadeIn from 'react-fade-in';
import CarouselItemTemplate from './CarouselItemTemplate'

class CarouselIntro extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                collapse: false
            }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleNavbarClick() {
        this.setState({
            collapse: false
        });
    }

    render() {
        const overlay = <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleNavbarClick} />
        return (
            <div id="carouselIntro" className="">
                <Carousel
                    activeItem={1}
                    length={4}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    interval={7000}>
                    <CarouselInner>
                        <CarouselItemTemplate view="1" />
                        <CarouselItemTemplate view="2" />
                        <CarouselItemTemplate view="3" />
                        <CarouselItemTemplate view="4" />
                    </CarouselInner>
                </Carousel>

            </div>
        );
    }
};

export default CarouselIntro;