import { Container, Row, Col, Button } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import Header from "../assets/Header.png"

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="6">
                        <div className="title">
                            <div className="text">Simple a<span>nalytic</span> tool</div>
                            <div className="text">that help you to g<span>row up</span></div>
                            <div className="text">your business</div>
                        </div>
                        <div className="desc">
                            <div className="text">Manage your business with</div>
                            <div className="text">a simple and useful tools analytic</div>                     
                        </div>
                        <Button variant="danger">Try Demo</Button>
                    </Col>
                    <Col md="6">
                        <Image src={Header} alt="Home image" className="images img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home