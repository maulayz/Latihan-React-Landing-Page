import { Card, Button, Container, InputGroup, FormControl} from "react-bootstrap";

const NewsLetter = () => {
    return (
        <div className="News-Letter">
            <Container>
                <div className="text-center">
                    <Card.Body className=" card-news">
                        <Card.Title>Subscribe Our Newsletter</Card.Title>
                        <Card.Text>
                        We will not send spam to your email
                        </Card.Text>
                        <InputGroup className="mb-1 form">
                            <FormControl placeholder="Type your email address here" className="placeholder"/>
                            <Button variant="danger" className="subscribe" id="button-addon2">Subscribe</Button>
                        </InputGroup> 
                    </Card.Body>
                </div>
            </Container>
        </div>
    )
}

export default NewsLetter