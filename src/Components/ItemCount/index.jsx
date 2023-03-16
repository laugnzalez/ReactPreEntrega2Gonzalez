import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(Number(initial));
	const [quantity, setQuantity] = useState(Number(initial));

	useEffect(() => {}, [count]);

	const sumQuantity = () => {
		quantity < stock ? setQuantity(quantity + 1) : setQuantity(Number(stock));
		quantity < stock ? setCount(count + 1) : setCount(Number(stock));
	};

	const substractQuantity = () => {
		quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
		quantity > 1 ? setCount(count - 1) : setCount(1);
	};

	return (
		<div className="">
			<Stack direction="horizontal" gap="3">
				<Button onClick={substractQuantity}>-</Button>
				<span>{quantity} </span>
				<Button onClick={sumQuantity}>+</Button>
			</Stack>

			<Button id="addToCart">Agregar al carrito</Button>
		</div>
	);
}

export default ItemCount;
