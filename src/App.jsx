import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/NavBar/index';

function App() {
	return (
		<div>
			<Navbar />
			<ItemListContainer greeting={'Hola, bienvenido a Blár Decó :)'} />
		</div>
	);
}

export default App;
