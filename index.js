
//API Sample
const express = require('express');
const cors = require('cors');
const PORT = 3333;
var app = express();

app.use(cors())

app.get('/api/customers', (req, res) => {
	var customers = [
		{"id": 1, "name": "Abhishek", "age": 28},
		{"id": 2, "name": "Hardik", "age": 26},
		{"id": 3, "name": "Sitanshu", "age": 27},
		{"id": 4, "name": "Bashir", "age": 24},
		{"id": 5, "name": "Satya", "age": 22},
		{"id": 6, "name": "Adarsh", "age": 24}
	]
	
	res.status(200).json({
		customers
	})
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: "It's working"
    })
})

app.listen(PORT, () => {
	console.log("server listening port: " + PORT)
});
