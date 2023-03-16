import Item from '../Item';
import { Container, Row } from 'react-bootstrap';

function ItemList({ products }) {
	return (
		<Container>
			<Row>
				{products.map((item, index) => (
					<Item item={item} key={item.id} />
				))}
			</Row>
		</Container>
	);
}

export default ItemList;
