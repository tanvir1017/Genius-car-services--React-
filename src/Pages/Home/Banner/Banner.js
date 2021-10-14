import React from 'react';
import { Carousel } from 'react-bootstrap';
import B1 from '../../../images/banner/banner1.jpg';
import B2 from '../../../images/banner/banner2.jpg';
import B3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
                    <Carousel fade>
                    <Carousel.Item>
                <img
                className="d-block w-100"
                src={B1}
                alt="First slide"
                />
                <Carousel.Caption className="">
                <h1 className="">#No1 Services in the world</h1>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={B2}
                alt="Second slide"
                />

                <Carousel.Caption  className="">
                <h1>Anlysis wise services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={B3}
                alt="Third slide"
                />

                <Carousel.Caption className="">
                <h1>Consumer happiness is our first priorety</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;