import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavBar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    $:hover {
      color: white;
    }
  }
`;

const NavigationBar = (props) => {
  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>Coders</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <NavBar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </NavBar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
