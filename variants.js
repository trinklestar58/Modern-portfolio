export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: [0.2, 0.1, 0.1, 0.3],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: delay,
        ease: [0.2, 0.2, 0.2, 0.5],
      },
    },
  };
};
