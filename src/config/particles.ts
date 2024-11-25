export const particlesConfig = {
  particles: {
    number: { value: 50 },
    color: { value: "#00f3ff" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" }
    },
    links: {
      enable: true,
      color: "#00f3ff",
      opacity: 0.2
    }
  }
} as const;