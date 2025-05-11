const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/movie', express.static(path.join(__dirname, 'movie')));

app.get('/api/videos', (req, res) => {
  res.json([
    { id: 1, url: '/movie/1.mp4' },
    { id: 2, url: '/movie/2.mp4' },
    { id: 3, url: '/movie/3.mp4' }
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
