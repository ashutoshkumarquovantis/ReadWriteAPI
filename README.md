# Read & Write API

This is an API which deals with read write operations of PC files

## Installation

Use the npm as follows to download all dependencies.

```bash
npm init -y
```

## Usage

```javascript
// returns 'What is the name of the file'
nodemon http_reqs.js

// returns full directory of the file
file_name.txt

```
## HTTP Requests on Web

### To read the desired file
```javascript
localhost:8000/readFile
```
### To Overwrite the desired file
```javascript
localhost:8000/writeFile/post
```
### To append to the desired file
```javascript
localhost:8000/writeFile/put
```

## Warning!!!
Please don't separate the directory of the project file and if seperated, change the directories of imports respectively.
