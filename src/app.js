const path = require('path');

const express = require('express');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Brayan Garcia',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Brayan Garcia',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Screen',
    message: 'This is some helpful text.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is sunny',
    location: 'Santa Ana, Santa Ana, El Salvador',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000!');
});