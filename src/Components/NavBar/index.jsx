import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

//Components
import CartWidget from '../CartWidget';

function NavBar() {
	return (
		<Navbar bg="secondary" expand="lg">
			<Container>
				<Navbar.Brand>
					<NavLink
						to="/"
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
								color: 'white',
								textDecoration: 'none',
							};
						}}
					>
						<i className="bi bi-rainbow"></i> Blár Decó
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Item>
							<NavLink
								to="/category/hogar"
								style={({ isActive }) => {
									return {
										fontWeight: isActive ? 'bold' : '',
										color: 'white',
										textDecoration: 'none',
									};
								}}
							>
								Hogar
							</NavLink>
						</Nav.Item>

						<Nav.Item>
							<NavLink
								to="category/decoracion"
								style={({ isActive }) => {
									return {
										fontWeight: isActive ? 'bold' : '',
										color: 'white',
										textDecoration: 'none',
										paddingLeft: '20px',
									};
								}}
							>
								Decoración
							</NavLink>
						</Nav.Item>
					</Nav>
					<NavLink
						to="/cart"
						style={({ isActive }) => {
							return {
								fontWeight: isActive ? 'bold' : '',
								color: 'white',
								textDecoration: 'none',
							};
						}}
					>
						<CartWidget />
					</NavLink>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
