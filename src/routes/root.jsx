import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

function Root() {
	const parameters = useParams();
	const boolParameters = Boolean(parameters.id);
	return (
		<div>
			<ItemListContainer
				categoryId={parameters.id}
				boolParameters={boolParameters}
				greeting={'Hola, bienvenido a Blár Decó!'}
			/>
		</div>
	);
}

export default Root;
