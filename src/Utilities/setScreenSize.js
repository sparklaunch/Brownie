const setScreenSize = () => {
  // 화면 크기를 설정하는 함수입니다.
  const viewportHeight = window.innerHeight * 0.01; // 뷰포트 높이를 100으로 나누어서 vh를 구합니다.
  document.documentElement.style.setProperty("--vh", `${viewportHeight}px`); // 뷰포트 높이를 CSS 변수로 설정합니다.
};

export default setScreenSize;
