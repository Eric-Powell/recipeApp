const mongoose = require('mongoose');
const uri = 'mongodb://EP:cookingIsFun1@ds133556.mlab.com:33556/recipes';
// const uri = 'mongodb://heroku_rqp344x5:m5at2n9p2t5hfk73h2nsthvcoc@ds139576.mlab.com:39576/heroku_rqp344x5';

mongoose.connect(process.env.MONOGODB_URI || uri, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error', err));
db.once('open', () => console.log('MongoDB connected!' + '\n' + '*******************'));

module.exports = db