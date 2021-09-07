const express = require("express");
const fs = require("fs")
const path = require("path");

const app = express();
const port = 3000;


// EXPRESS WORK
app.use('/static', express.static('static'))
app.use(express.urlencoded())

// PUB CONFIGURATION
//Set the template engine as pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

//ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely."
    const params = {'title': 'PubG is a interesting game.', 'content': con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=> {
    name = req.body.name
    age = req.body.age
    phone = req.body.phone
    locality = req.body.locality
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name}, ${age} years old, His phone number is ${phone}. He is residing at ${locality} and his address is ${address}. His remarks are ${more}.`

    fs.writeFileSync('output.txt', outputToWrite);

    // console.log(req.body)
    const params = {'message': 'Your form has been submitted successfully'}

    res.status(200).render('index.pug', params);
})
// our pug demo endpoint
// app.get("/demo", (req, res) => {
//     res.status(200).render("demo", {title: 'Hey Harry', message: 'Hello there'})
// });


// app.get("/", (req, res) => {
//     res.send("This is my first app with Harry..")
// });

// app.get("/about", (req, res) => {
//     res.send("This is my about page..")
// });

// app.get("/services", (req, res) => {
//     res.send("This is my service page..")
// });

// app.get("/contact", (req, res) => {
//     res.send("This is my contact us page..")
// });

// app.get("/feedback", (req, res) => {
//     res.send("This is my feedback page..")
// });

// START THE SERVERK
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})