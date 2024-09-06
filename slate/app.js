const express = require('express');
const { engine } = require('express-handlebars'); // Correct import for v6

const app = express();

// Register Handlebars as the template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Serve static files like CSS, images, etc.
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('home', { title: 'boringOS Home' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SLATE server running on port ${PORT}`);
});
