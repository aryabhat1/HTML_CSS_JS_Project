const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true});
const port = 3000;

// MONGOOSE PARAMETERS
// const { text } = require("express");

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/contactDance');
// }

// DEFINE MONGOOSE SCHEMA:
// var contactSchema = new mongoose.Schema({
//     name: String,
//     age: { type: Number, min: 1, max: 100 },
//     gender: String,
//     phone: Number,
//     address: String,
//     email: String

// });

var contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    phone: String,
    address: String,
    email: String

});

var Contact = mongoose.model('Contact', contactSchema);
// var bodyparser = require("body-parser");
// console.log(Contact);
// EXPRESS SPECIFIC STUFF:
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory


 
// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    const params = { }
    // res.status(200).render('index.pug', params);
       res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    const params = { }
    // res.status(200).render('home.pug', params);
       res.status(200).render('contact.pug', params);
    //    console.log(params);
})

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    // console.log(myData);
    myData.save().then(()=>{
        res.send("This item has been saved to the database.")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database.")
    });
    // res.status(200).render('contact.pug');
})
// app.post('/contact', (req, res)=>{
//     name = req.bod   y.name
//     age = req.body.age
//     gender = req.body.gender
//     address = req.body.address
//     more = req.body.more

//     let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//     fs.writeFileSync('output.txt', outputToWrite)
//     const params = {'message': 'Your form has been submitted successfully'}
//     res.status(200).render('index.pug', params);

// })


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
