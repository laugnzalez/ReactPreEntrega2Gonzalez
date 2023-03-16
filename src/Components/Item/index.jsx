import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ item }) {
	return (
		<Col sm={12} md={6} lg={3}>
			<Card>
				<Card.Img src={item.image} />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Item;
