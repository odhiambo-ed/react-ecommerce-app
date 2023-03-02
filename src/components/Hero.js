import React from "react";

import BackgroundImage1 from "../assets/images/slider_1.jpg";
import BackgroundImage2 from "../assets/images/slider_2.jpg";
import BackgroundImage3 from "../assets/images/slider_3.jpg";
import { Carousel } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { signIn } from '../features/slices/authSlice';

function Hero(props) {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(signIn());
    };
    return (
        <Carousel>
            <Carousel.Item>
                <div
                    className="d-block w-100 main_slider"
                    style={{
                        backgroundImage: `url(${BackgroundImage1})`,
                    }}
                >
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content" data-aos="fade-right">
                                    <h6>New Collection 2023</h6>
                                    <h1>Get up to 20% Off New Stock</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#" onClick={login}>shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className="d-block w-100 main_slider"
                    style={{
                        backgroundImage: `url(${BackgroundImage2})`,
                    }}
                >
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content" data-aos="fade-right">
                                    <h6>Old Collection 2023</h6>
                                    <h1>Get up to 80% Off Old Stock</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#" onClick={login}>shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className="d-block w-100 main_slider"
                    style={{
                        backgroundImage: `url(${BackgroundImage3})`,
                    }}
                >
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content" data-aos="fade-right">
                                    <h6>Popular Collection 2023</h6>
                                    <h1>Get up to 30% Off Popular Stock</h1>
                                    <div className="red_button shop_now_button">
                                        <a href="#" onClick={login}>shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;