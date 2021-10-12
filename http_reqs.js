
// --------------------------------- Imports  ---------------------------------------
const express = require('express');
const path = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------------ FS Operations from file_ops.js ---------------------------
const {readFilePromise, writeFilePromise, appendFilePromise} = require("./file_ops");

// ---------------------------------const & let ---------------------------------------
const app = express();
const port = 8000;
let dir = __dirname;
let filePath = 'C://Users//Ashutosh Kumar//Desktop//Quovantis_Practice//JavaScript//poc//poc_11_10_2021//default.txt';


// --------------------------------- middleware ----------------------------------------
app.use(express.text());


// --------------------------------- input from CLI ------------------------------------
readline.question(`What is the name of the file
`, name => {
    filePath = path.join(dir, name);
    console.log(filePath);
    readline.close()
});


// --------------------------------- http requests -------------------------------------
app.get("/readFile", (req, res, next) => {
    readFilePromise(filePath)
    .then((data) => {
        res.write(data);
        res.send();
    })
    .catch(next);
})

app.post("/writeFile/post", (req, res, next) => {
    const data = req.body;
    writeFilePromise(filePath, data)
    .then((msg) => {
        res.write(msg);
        res.send();
    })
    .catch(next);   
})

app.put("/writeFile/put", (req, res, next) => {
    const data = req.body;
    appendFilePromise(filePath, data)
    .then((msg) => {
        res.write(msg);
        res.send();
    })
    .catch(next);
})


app.listen(port, () => {
    console.log("Server is listening");
});

