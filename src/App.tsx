import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default () => {
	const [count, setCount] = useState(0);
	const theme = useTheme();
	return (
		<Box>
			<Typography variant='h3' color={theme.schemes.light.secondary}>My Portfolio</Typography>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</Box>
	);
}
