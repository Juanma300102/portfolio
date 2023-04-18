import { Box, Divider, Typography, useTheme } from "@mui/material"

export default () => {
    const theme = useTheme()
    return (<Box sx={{
        bgcolor: theme.schemes.light.onPrimaryContainer,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flexDirection: 'column'
    }}>
        <Box sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
            flexDirection: 'column'
        }}>
            <Typography variant="h1" fontWeight={'bold'} fontSize={45} color={theme.schemes.light.onPrimary}>Juan Martin Pedrozo</Typography>
            <hr/>
            <Typography variant="h2" fontWeight={'light'} fontSize={24} color={theme.schemes.light.onPrimary}>Cloud Architect and Backend Developer</Typography>
        </Box>
    </Box>)
}