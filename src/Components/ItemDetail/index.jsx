import { Container, Card, Col } from 'react-bootstrap';

function ItemDetail({ detail }) {
	return (
		<Container>
			<Col sm={4} className="align-items-center">
				<Card>
					<Card.Img src={detail.image} />
					<Card.Body>
						<Card.Title>{detail.name}</Card.Title>
						<Card.Text>{detail.description}</Card.Text>
					</Card.Body>
					<Card.Footer> Unidades disponibles: {detail.stock}</Card.Footer>
				</Card>
			</Col>
		</Container>
	);
}

export default ItemDetail;
