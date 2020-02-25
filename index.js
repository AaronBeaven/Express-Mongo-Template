const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');

const app = Express();

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@gangodb-ljujb.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.engine('.hbs', hbs({ //Set the view engine to handlebars
    defaultLayout: 'layout', //Set the layout file as layout.hbs
    extname:'.hbs' //Set the extension name to .hbs

}));
app.set('view engine', '.hbs'); //Tell express to use this engine]

app.get('/', (req, res)=>{
    res.render('index')
})
app.listen(3000, ()=>{
    console.log('server listening on port 3000')
})