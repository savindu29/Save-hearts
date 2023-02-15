import {Container, Nav, Navbar} from "react-bootstrap";
import "./NavigationBar.scss"

export function NavigationBar() {

    return (
        <div className="navigation-bar">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="/assets/images/logo/save-hearts-logo.png"
                                                    alt="save-hearts-logo" width={175}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}