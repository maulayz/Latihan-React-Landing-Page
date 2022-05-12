import { Navbar, Container, Nav, } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import Logo from "../assets/Logo.png"

const Navigation = () => {
    return (
        <div className="Nav">
            <Navbar variant="dark">
                <Container>
                   <Nav>
                        <Navbar.Brand href="/">
                            <Image src={Logo} alt="Logo" />
                        </Navbar.Brand>
                        <div className="d-flex nav-text">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <Nav.Link href="#">Pricing</Nav.Link>
                            <Nav.Link href="#">Story</Nav.Link>
                        </div>
                    </Nav>
                    <Nav className="Nav-button">
                        <Nav.Link href="#" className="SignIn">Sign In</Nav.Link>
                        <Nav.Link href="#" className="SignUp">Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </div>
    )
}

export default Navigation