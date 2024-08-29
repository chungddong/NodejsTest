const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello, Node.js with Express!');
});



// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
