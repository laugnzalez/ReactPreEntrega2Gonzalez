import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';

function CartWidget() {
	return (
		<Nav.Item href="#cart">
			<i className="bi bi-cart-fill"></i>
			<Badge bg="black">1</Badge>
		</Nav.Item>
	);
}

export default CartWidget;
