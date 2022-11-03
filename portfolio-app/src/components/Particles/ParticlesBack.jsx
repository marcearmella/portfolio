import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticlesBack = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
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
                interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: false,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "push"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
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
                      },
                      polygon: {
                        nb_sides: 6
                      },
                      image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                      }
                    },
                    opacity: {
                      value: 0.21306986324071361,
                      random: true,
                      anim: {
                        enable: false,
                        speed: 1.118881118881119,
                        opacity_min: 0.03196803196803197,
                        sync: false
                      }
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
                    line_linked: {
                      enable: false,
                      distance: 200,
                      color: "#ffffff",
                      opacity: 1,
                      width: 2
                    },
                    move: {
                      enable: true,
                      speed: 2.5,
                      direction: "right",
                      random: true,
                      straight: true,
                      out_mode: "out",
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