import Nav from "react-bootstrap/Nav";

function CartWidget() {
	return (
		<Nav.Link href="#cart">
			<i className="bi bi-cart-fill"></i>
			<span>1</span>
		</Nav.Link>
	);
}

export default CartWidget;
