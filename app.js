const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

//Loading default portal assets and component's assets
app.use(express.static(__dirname + '/public/default/'));
app.use(express.static(__dirname + '/public/dist/'));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Setting the routes
app.use('/', require('./routes/main'));

//404 Error handling
app.all('*', (req, res) => { 
        res.status(404).render('404'); 
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on ${PORT}`));