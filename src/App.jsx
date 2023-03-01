import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Components/ItemListContainer";
import Menu from "./Components/NavBar/index";

function App() {
	return (
		<div>
			<Menu />
			<ItemListContainer greeting={"Hola, bienvenido a Blár Decó :)"} />
		</div>
	);
}

export default App;
