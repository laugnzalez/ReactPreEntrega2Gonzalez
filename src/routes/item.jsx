import ItemDetailContainer from '../components/ItemDetailContainer';
import { useParams } from 'react-router-dom';
function ItemRoot() {
	const itemParameters = useParams();
	const boolItems = Boolean(itemParameters.id);
	return (
		<ItemDetailContainer itemId={itemParameters.id} boolItems={boolItems} />
	);
}

export default ItemRoot;
