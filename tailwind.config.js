module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  //tailwind가 pages,components 폴더의 모든 디렉토리, .js, .jsx, .ts, .tsx로 끝나는 모든 파일에서 사용자가 tailwind를 사용한 것을 찾아낼 수 있다.
  //tailwind.config.js를 설정 시 js, jsx, ts, tsx 이런식으로 띄어쓰면 적용이 안되니 주의!
  theme: {
    extend: {},
  },
  //다크모드를 사용 시 컴퓨터의 다크모드 설정을 따라가게 할 것인지 아니면 리액트나 JS로 직접 토글 시킬건지를 설정해야함
  darkMode: "media",
  //컴퓨터의 다크모드 설정을 따라가게 하려면 media, 리액트나 js로 따라하게 하려면 class를 입력해야함
  plugins: [],
};
