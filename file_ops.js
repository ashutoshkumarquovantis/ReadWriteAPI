const fs = require('fs');


// to read a file 
readFilePromise = (dir) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dir, 'utf-8', (err, data) => {
            if(err) reject(err);
            else resolve(data);
        })
    })
}

// to either create new file or to overwrite the old one
writeFilePromise = (dir, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dir, data, (err) => {
            if(err) reject(err);
            else resolve('File is overwritten');
        })
    })
}

// to append to old file or to create new file.
appendFilePromise = (dir, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(dir, data, (err) => {
            if(err) reject(err);
            else resolve('File appended');
        })
    })
}

// Exporting the required functions...
module.exports = {
    readFilePromise, writeFilePromise, appendFilePromise
}