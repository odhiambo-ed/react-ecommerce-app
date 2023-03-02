import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                            <ul className="footer_nav">
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/edward-odhiambo/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/odhiambo_ed">
                                        <i className="fab fa-twitter"></i>{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/white3d">
                                        <i className="fab fa-github"></i>{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer_nav_container">
                            <div className="cr">
                                ©2018 All Rights Reserverd. This App is made with{" "}
                                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                                <a href="https://edwardodhiambo.com/" target="_blank">
                                    Edward Odhiambo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer