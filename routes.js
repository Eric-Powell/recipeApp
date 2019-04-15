const router = require('express').Router();
const Recipe = require('./db/recipeSchema');

router.get('/recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
        console.log(err);
    } else {
        res.send(recipes);
    }
  });
});

router.post('/add', (req, res) => {
  Recipe.create({...req.body}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }   
  });
});

router.post('/recipes/delete', (req, res) => {
  Recipe.deleteOne(req.body , (err, recipe) => {
    if (err) {
      console.log(err);
    } else {
      res.send(recipe);
    }
  });
});

module.exports = router;