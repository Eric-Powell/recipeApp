const express = require('express');
const app = express();
const db = require('./db/mongodb');
const router = require('./routes');
// const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(parser.json());

//Static file declaration
// app.use(express.static(path.join(__dirname, 'recipe-app-client/build')));

//production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'recipe-app-client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = 'recipe-app-client/build/index.html'));
//   })
// }
// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'recipe-app-client/public/index.html'));
// })

app.use('/', router);

app.listen(port, (req, res) => {
console.log(`server listening on port: ${port}`)
 });
