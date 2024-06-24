const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res, next) => {
    console.log("Hello");
})

app.listen(3000, (req, res, next) => {
    console.log("Server is running on port 3000");
})