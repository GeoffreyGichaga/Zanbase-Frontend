import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/white-logo.png'
import '../Styling/Help.css'

function HelpNav() {
  return (
    <Navbar className='helpnav' expand="lg">
    <Container>
        <Navbar.Brand href="/dashboard">
            <img src={logo} alt='cologo' id='logo'/>
        </Navbar.Brand>   

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-center">
                <Nav.Link id='navlinksh1' href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link id='navlinksh2' href="/profile">Profile</Nav.Link>
                <Nav.Link id='navlinksh3' href="/attendance-register">Attendance</Nav.Link>
                <Nav.Link id='navlinksh4' href="/pv">PV's</Nav.Link>
                <Nav.Link id='navlinksh5' href="/tasks">Tasks</Nav.Link>
                <Nav.Link id='navlinksh6' href="/messages">Messages</Nav.Link>
                <Nav.Link id='navlinksh7' href="/targetsboard">Targets Board</Nav.Link>
                <Nav.Link id='navlinksh8' href="/tutorials">Tutorials</Nav.Link>
                


            
            </Nav>
        </Navbar.Collapse>

    </Container>
  </Navbar>

    
  );
}

export default HelpNav;