import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticlesBack = () => {
    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "none",
                },
              },
              fpsLimit: 120,
              particles: {
                number: {
                  value: 6,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#bcc2eb"
                },
                shape: {
                  type: "edge",
                  stroke: {
                    width: 0,
                    color: "#000"
                  }
                },
                opacity: {
                  value: 0.3,
                  random: true
                },
                size: {
                  value: 300,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 10,
                    size_min: 40,
                    sync: false
                  }
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "right",
                  random: false,
                  straight: true,
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 1183.721462448409,
                    rotateY: 3472
                  }
                }
              },
              detectRetina: true,
            }}
        />
    );
}

export default ParticlesBack;