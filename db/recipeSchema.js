const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Recipe = new Schema({
    title: {type: String, required: true, max: 100, lowercase: true, trim: true},
    id: {type: Number, required: true, trim: true},
    img: {type: String, required: true, max: 1000, lowercase: true, trim: true},
    ingredients: {type: Array, required: true, max: 1000, lowercase: true, trim: true},
    instructions: {type: String, required: true, max: 5000, lowercase: true, trim: true},
});

module.exports = mongoose.model('Recipe', Recipe, 'recipes');