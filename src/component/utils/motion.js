export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export const hiddenToVisible = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      duration: 1,
      y: { duration: 0.3 },
    },
  },
  viewport: { once: false },
};
