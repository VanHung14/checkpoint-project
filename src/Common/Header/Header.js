import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Checkpoints</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/api/checkpoints">Checkpoints</Nav.Link>
            <Nav.Link href="/api/historys">History checks</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/api/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/api/changepassword">
                Change password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/api/invite">
                Invite user
              </NavDropdown.Item>
              <NavDropdown.Item href="/api/users">
                Manage users
              </NavDropdown.Item>
              <NavDropdown.Item href="/api/createcheckpoint">
                Create checkpoint
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/api/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
