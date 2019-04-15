const mongoose = require('mongoose');
const uri = 'mongodb://EP:cookingIsFun1@ds133556.mlab.com:33556/recipes';

mongoose.connect(process.env.MONOGODB_URI || uri, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error', err));
db.once('open', () => console.log('MongoDB connected!' + '\n' + '*******************'));

module.exports = db