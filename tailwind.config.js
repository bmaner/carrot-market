module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  //tailwind가 pages,components 폴더의 모든 디렉토리, .js, .jsx, .ts, .tsx로 끝나는 모든 파일에서 사용자가 tailwind를 사용한 것을 찾아낼 수 있다.
  //tailwind.config.js를 설정 시 js, jsx, ts, tsx 이런식으로 띄어쓰면 적용이 안되니 주의!
  theme: {
    extend: {},
  },
  plugins: [],
};
