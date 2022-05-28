import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.svg';
import { Reveal } from './function.jsx';
import { Component } from 'react';

function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const history = useHistory();

    function logout() {
        localStorage.clear();
        history.push('/login');
    }

    class Header extends Component {
        constructor() { // need constructor to use imported function
            Reveal();
        }
    }

    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/home'>Reactel</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        { // condition start
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to='/create' className='headerNav'>Add Product</Link>
                                    <Link to='/' className='headerNav'>View Product</Link>
                                    {/* <Link to='/update' style={{ color: 'cyan' }}>Update Item</Link> */}
                                </>
                                :
                                <>
                                    <Link to='/register' className='headerNav'>Registeration</Link>
                                    <Link to='/login' className='headerNav'>Login Now</Link>
                                </>
                        }
                        <Button onClick={()=>Reveal()}> Reveal Email </Button>
                    </Nav>
                    <Nav>
                        {
                            localStorage.getItem('user-info') ?
                                <NavDropdown title={user && user.name}>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                : null // esle part
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

function Logo() {
    return (<img src={logo} className="App-logo" alt="logo" />)
}

export default Header
export { Logo }
