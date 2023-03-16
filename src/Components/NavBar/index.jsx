import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

//Components
import CartWidget from '../CartWidget';

function NavBar() {
	return (
		<Navbar bg="secondary" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand>
					<NavLink to="/">
						<i className="bi bi-rainbow"></i> Blár Decó
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Item>
							<NavLink to="/category/hogar">Hogar</NavLink>
						</Nav.Item>

						<Nav.Item>
							<NavLink to="category/decoracion">Decoración</NavLink>
						</Nav.Item>
					</Nav>
					<NavLink to="/cart">
						<CartWidget />
					</NavLink>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
