
//API Sample
const express = require('express');
const cors = require('cors');
const PORT = 3333;
var app = express();

app.use(cors())

// app.get('/api/customers', (req, res) => {
//     var customers = [
//         { "id": 1, "name": "Abhishek", "age": 28 },
//         { "id": 2, "name": "Hardik", "age": 26 },
//         { "id": 3, "name": "Sitanshu", "age": 27 },
//         { "id": 4, "name": "Bashir", "age": 24 },
//         { "id": 5, "name": "Satya", "age": 22 },
//         { "id": 6, "name": "Adarsh", "age": 24 }
//     ]

//     // res.status(200).json({
//     // 	customers
//     // })
// });

// app.get('/', (req, res) => {
//     // res.status(200).json({
//     //     message: "It's working"
//     // })
// })
app.get('/', function (request, response) {
    response.send('Hello World!')
});

app.get('/users', function (req, res) {
    // Hard coding for simplicity. Pretend this hits a real database
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
        { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
    ]);
});

app.listen((process.env.PORT || 5000), () => {
    console.log("server listening port: " + PORT)
});
