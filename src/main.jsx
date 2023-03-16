import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../src/routes/root';
import ItemRoot from '../src/routes/item';
import Layout from './components/Layout';
import './index.css';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Root />,
			},
			{
				path: '/category/:id',
				element: <Root />,
			},
			{
				path: '/item/:id',
				element: <ItemRoot />,
			},
			{
				path: '/cart',
				element: <div />,
			},
			// {
			// 	path: '/checkout',
			// 	element: <div />,
			// },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
