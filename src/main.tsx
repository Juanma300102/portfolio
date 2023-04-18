import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssBaseline/>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}/>
		</ThemeProvider>
	</React.StrictMode>
);
