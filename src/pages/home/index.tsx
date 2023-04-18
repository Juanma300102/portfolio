import { Box, Typography, useTheme } from "@mui/material"

export default () => {
    const theme = useTheme()
    return (<Box sx={{
        bgcolor: theme.schemes.light.onPrimaryContainer
    }}>
        <Typography variant="h1">This is my shitty home</Typography>
    </Box>)
}