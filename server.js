const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// ミドルウェア
app.use(cors());
app.use(express.json());

// ルート
app.get('/', (req, res) => {
  res.json({ message: 'フィードバックシステムAPIへようこそ！' });
});

// フィードバック一覧を返すサンプルAPI
app.get('/api/feedback', (req, res) => {
  const sampleFeedback = [
    {
      id: 1,
      title: 'イベントについての提案',
      content: '次回のイベントでは〇〇をしてはどうでしょうか？',
      status: 'pending',
      createdAt: '2025-04-01T10:00:00Z'
    },
    {
      id: 2,
      title: '活動場所について',
      content: '活動場所を〇〇に変更することは可能でしょうか？',
      status: 'answered',
      createdAt: '2025-04-05T14:30:00Z'
    }
  ];
  
  res.json({ success: true, data: sampleFeedback });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`サーバーが起動しました: http://localhost:${PORT}`) ;
});
