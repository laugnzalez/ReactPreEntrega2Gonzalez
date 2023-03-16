import { useEffect, useState } from 'react';
import Products from '../../mocks/products';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer({ itemId }) {
	const [detail, setDetail] = useState({});
	useEffect(() => {
		const ItemP = new Promise((resolve, reject) =>
			setTimeout(() => resolve(Products), 2000)
		);

		ItemP.then((response) => {
			const DetailedItem = response.find((item) => item.id == itemId);
			setDetail(DetailedItem);
		}).catch((error) => console.log(error));
	}, [itemId]);

	return <ItemDetail detail={detail} />;
}

export default ItemDetailContainer;
