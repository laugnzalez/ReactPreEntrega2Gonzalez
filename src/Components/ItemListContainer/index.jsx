import { useEffect, useState } from 'react';
import Products from '../../mocks/products';

import ItemList from '../ItemList';

function ItemListContainer({ greeting, categoryId, boolParameters }) {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState([]);
	console.log(categoryId);
	console.log(boolParameters);

	useEffect(() => {
		const ProductsP = new Promise((resolve, reject) =>
			setTimeout(() => resolve(Products), 2000)
		);

		ProductsP.then((response) => {
			if (boolParameters) {
				const categorizedProducts = response.filter(
					(products) => products.category === categoryId
				);
				setProducts(categorizedProducts);
			} else {
				setProducts(response);
			}
		}).catch((error) => console.log(error));
	}, [categoryId]);

	return (
		<div className="container pt-5">
			<h1 className="g-3">{greeting}</h1>

			<ItemList products={products} />
		</div>
	);
}

export default ItemListContainer;
