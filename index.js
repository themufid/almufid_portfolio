const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk mengakses file statis
app.use('/assets', express.static(path.join(__dirname, './assets')));

// Rute untuk halaman HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/about.html'));
});

app.get('/authors', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/authors.html'));
});

app.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/blogs.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/contact.html'));
});

app.get('/account/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/account/login.html'));
});

app.get('/author/mufid', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/assets/author/mufid/index.html'));
});

app.get('/learning/learn', (req, res) => {
  res.sendFile(path.join(__dirname, '../almufid_portfolio/assets/learning/learn.html'));
});

// Menangani permintaan yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
