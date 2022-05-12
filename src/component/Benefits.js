import React from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Realtime from "../assets/Realtime Analytic.png"
import EasyToOperate from "../assets/Easy to Operate.png"
import Fully from "../assets/Fully Secured.png"

const Benefits = () => {
    return (
        <div className="Keys-Benefits">
            <div className="Header text-center">
                <h1>3 Keys Benefits</h1>
                <h5>You can easly manage your business with a powerfull tools</h5>
            </div>

            <div className="Real-time-analytic">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="benefits">
                                <div className="header">Real-Time Analytic</div>
                                <div className="text">
                                    <p>With a real time analytic, you can check</p>
                                    <p>the data in real time, this can easly</p>
                                    <p>help you to grow up your business fast</p>
                                    <p>and accurate</p>
                                </div>                    
                                <a href="#">Learn More</a>
                            </div>
                        </Col>
                        <Col md="6">
                            <Image src={Realtime} alt="Home image" className="images-real img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Easy-to-operate">
                <Container>
                    <Row>
                        <Col>
                            <Image src={EasyToOperate} alt="Home image" className="images-easy img-fluid"/>
                        </Col>
                        <Col md>
                            <div className="benefits ">
                                <div className="header">Easy To Operate</div>
                                <div className="text">
                                    <p>Realytic tools suitable for all people</p>
                                    <p>from beginners to expert. Everyone can</p>
                                    <p>manage their business very easy.</p>
                                    <p>We keep the design simple and useful</p>
                                </div>                    
                                <a href="#">Learn More</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Fully-secured">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="benefits">
                                <div className="header">Fully Secured</div>
                                <div className="text">
                                    <p>No need to worry about your data privacy.</p>
                                    <p>We always respect privacy of every</p>
                                    <p>user.  Your data will be secure with our high</p>
                                    <p>technology security.</p>
                                </div>                    
                                <a href="#">Learn More</a>
                            </div>
                        </Col>
                        <Col md="6">
                            <Image src={Fully} alt="Home image" className="images-fully img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Benefits