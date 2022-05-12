import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image"
import HappyUserImage from "../assets/Happy User.jpg"

const HappyUser = () => {
    return (
        <div className="Happy-User">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Image src={HappyUserImage} alt="Product Manager on Sportify" className="HappyUser-Image" />
                        </div>
                    </Col>
                    <Col>
                        <div className="User">
                            <p>"Most powerful analytic tool i’ve ever used.</p>
                            <p>By using realytic, manage business become.</p>
                            <p>easy and really fast."</p>
                        </div>
                        <div className="Name-user">
                            <p>Alexander Graham</p>
                            <p className="title">Product Manager on Sportify</p>
                        </div>
                        <Button variant="danger" className="Button-user">Read Full History</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HappyUser