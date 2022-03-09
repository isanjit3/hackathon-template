const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

// setting view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
    res.render('index')
});

// listening to application at http://localhost:3000/
app.listen(PORT, () => {
    console.log(`App running at port: ${PORT}`);
});