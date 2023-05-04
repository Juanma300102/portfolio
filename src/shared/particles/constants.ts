import { ISourceOptions } from 'tsparticles-engine'

export const backgroudParticlesConfig: ISourceOptions = {
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
                quantity: 0,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "out" ,
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: false,
                area: 800,
            },
            value: 5,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "image",
            image: {
              src: "https://drive.google.com/uc?id=1ACoGr8G-C_8H158nVmLeDTgU6NDV-YWD",
              width: 100,
              height: 100
            }
        },
        size: {
            value: 300
        }
    },
    detectRetina: true,
}