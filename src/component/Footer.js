import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import Image from "react-bootstrap/Image";
import Logo from "../assets/Logo.png"

const Footer = () => {
    return (

        <div className="Footer">
            <div className="bg-footer">
                <Container>
                    <div className="tittle-footer text-center">
                        <p>Simple analytic tools</p>
                        <p>to grow up your business</p>
                        <Button variant="danger" className="Button-user">Get Started</Button>
                    </div>
                    <Row>
                        <Col>
                            <div className="d-flex company">
                                <Image src={Logo} alt="Logo" className="footer-image" />
                                <h4>Realtic Inc.</h4>
                            </div>
                            <div className="desc-footer">
                                <p>Help people manage their</p>
                                <p>business easy and fast</p>
                            </div>
                        </Col>
                        <Col>
                            <h4>Explore</h4>
                            <ul className="list-unstyled">
                                <li>Our Service</li>
                                <li>Equity System</li>
                                <li>Refund</li>
                                <li>Shareolder</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Account</h4>
                            <ul className="list-unstyled">
                                <li>My Account</li>
                                <li>Top Benefit</li>
                                <li>How-to Tutorials</li>
                                <li>Withdrawl</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4>Office</h4>
                            <ul className="list-unstyled">
                                <li>+62 0000 000 000</li>
                                <li>Kapuk, Jakarta</li>
                                <li>No. 10 (realtic)</li>
                                <li>Support@realtic.id</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <marquee>Code With ❤</marquee>
            </div>
        </div>
    )
}

export default Footer