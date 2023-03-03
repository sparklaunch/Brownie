const setScreenSize = () => {
  const viewportHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${viewportHeight}px`);
};

export default setScreenSize;
