import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';

const recipes = [
    {
       "ingredients":[
          "cheese",
          "sauce",
          "noodles",
          "more cheese"
       ],
       "_id":"5cabc4dae7179a36ac32ccb1",
       "id":0,
       "title":"Lasagna",
       "instructions":"mix and cook, then enjoy!",
       "img":"https://assets.kraftfoods.com/recipe_images/opendeploy/88326-e5ff7f4500adac20f21c3beec343a2fa1016ac79_642x428.jpg"
    },
    {
       "ingredients":[
          "cheese",
          "bread",
          "butter"
       ],
       "_id":"5caff472e7179a36ac34eab0",
       "id":1,
       "title":"Grilled Cheese",
       "instructions":"assemble then heat on each side for 6 mins",
       "img":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/24/0/ZB0202H_classic-american-grilled-cheese_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371603614279.jpeg"
    },
    {
       "ingredients":[
          "pork",
          "seasoning",
          "bbq sauce"
       ],
       "_id":"5cb001d84cf313f1415bc5d9",
       "title":"pulled pork",
       "instructions":"mix ingredients and assemble sandwhiches",
       "img":"https://www.cookingclassy.com/wp-content/uploads/2018/10/pulled-pork-22-500x500.jpg",
       "id":3,
       "__v":0
    }
 ];

 let onDelete = (id) => {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
    axios.post('http://localhost:5000/recipes/delete', {id});    
  }


it('renders without crashing', () => {
    // console.log(Recipe);
  const div = document.createElement('div');
  const recipeList = recipes.map((recipe, i) => (
    // <Recipe key={recipe.id} {...recipe} onDelete={this.onDelete}/>
    ReactDOM.render(<Recipe key={recipe.id} {...recipe} onDelete={onDelete}/>, div)
  ));
});

it('renders all 3 recipes in list', () => {
  const div = document.createElement('div');
  const recipeList = recipes.map((recipe, i) => (
    ReactDOM.render(<Recipe key={recipe.id} {...recipe} onDelete={onDelete}/>, div)
  ));
    expect(recipeList).toHaveLength(3);
});