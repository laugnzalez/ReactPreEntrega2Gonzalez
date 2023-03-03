import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget';

function NavBar() {
	return (
		<Navbar bg="secondary" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					{' '}
					<i className="bi bi-rainbow"></i> Blár Decó
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#products">Products</Nav.Link>
						<Nav.Link href="#aboutUs">About us</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
						<Nav.Item>
							{' '}
							<CartWidget />{' '}
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
