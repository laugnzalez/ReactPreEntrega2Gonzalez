import { Container, Button } from 'react-bootstrap';
import { useRouteError, Link } from 'react-router-dom';

function ErrorElement() {
	const error = useRouteError();
	return (
		<Container className="align-items-center">
			<h1>Algo no salio como esperabamos.</h1>
			<p>Lo sentimos, hubo un error inesperado.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Button>
				<Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
					Volver al inicio
				</Link>
			</Button>
		</Container>
	);
}

export default ErrorElement;
