const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Gabriel Miranda' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});