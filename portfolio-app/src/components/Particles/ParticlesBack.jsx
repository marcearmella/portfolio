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
                  value: 0.21306986324071361,
                  random: true
                },
                size: {
                  value: 209.12412503255226,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 10,
                    size_min: 40,
                    sync: false
                  }
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "right",
                  random: true,
                  straight: true,
                  bounce: false,
                  attract: {
                    enable: true,
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