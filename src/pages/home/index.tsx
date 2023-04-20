import { Box, Divider, Typography, useTheme } from "@mui/material"
import PythonIcon from '../../assets/mdi_language-python.svg'
import TypescriptIcon from '../../assets/mdi_language-typescript.svg'
import JavascriptIcon from '../../assets/mdi_language-javascript.svg'
import AwsIcon from '../../assets/mdi_aws.svg'
import Blob1 from '../../assets/blob-1.svg'
import Blob2 from '../../assets/blob-2.svg'
import Blob3 from '../../assets/blob-3.svg'
import { useCallback } from "react"
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles"


const imgDefaultStyle: object = {
    position: 'absolute',
    zIndex: '900',
}

export default () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const theme = useTheme()
    return (
    <Box sx={{
        width: '100vw',
        height: '100vh',
        padding: 0,
        display: 'block',
        bgcolor: theme.schemes.light.onPrimaryContainer,
    }}>
        <Box sx={{
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
            zIndex: 1000,
            flexDirection: 'column'
        }}>
            <Box sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
                flexDirection: 'column',
                gap: 1,
            }}>
                <Typography variant="h1" fontWeight={'bold'} fontSize={45} color={theme.schemes.light.onPrimary}>Juan Martin Pedrozo</Typography>
                <Divider sx={{width: '100%', bgcolor: theme.schemes.light.onPrimary}}/>
                <Typography variant="h2" fontWeight={'light'} fontSize={24} color={theme.schemes.light.onPrimary}>Cloud Architect and Backend Developer</Typography>
                <Box sx={{display: 'flex', gap: 2, paddingY: 1, width: '100%'}}>
                    <img src={PythonIcon}/>
                    <img src={TypescriptIcon}/>
                    <img src={JavascriptIcon}/>
                    <img src={AwsIcon}/>
                </Box>
            </Box>
        </Box>
        <img style={{
            ...imgDefaultStyle,
            width: '420px',
            height: '551px',
            top: '-259px',
            right: '110px',
            transform: 'rotate(-90deg)'
        }} src={Blob1}/>
        <img style={{
            ...imgDefaultStyle,
            width: '397px',
            height: '303px',
            top: '259px'
        }} src={Blob2}/>
        <img style={{
            ...imgDefaultStyle,
            width: '397px',
            height: '303px',
            top: '522px',
            left: '-51px'
        }} src={Blob3}/>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

    </Box>)
}