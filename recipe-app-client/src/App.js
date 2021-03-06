import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import NewRecipeForm from './NewRecipeForm';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showNewRecipeForm: false,
      newRecipeID: 0
    };
  }

  urlHandler() {
    return process.env.NODE_ENV === 'production' ? 'https://infinite-ridge-41467.herokuapp.com/recipes' : 'http://localhost:5000/recipes';
  }

  componentDidMount() {
    const url = this.urlHandler();

    axios.get(url)
      .then(response => {
        let highestIdx = response.data.map(item => item.id).sort((a, b) => b - a).shift() + 1;
        this.setState({recipes: response.data, newRecipeID: highestIdx})
      })
      .catch(function (error){
        console.log(error);
      })
  }

  onClose = () => this.setState({showNewRecipeForm: false})

  onSave = (recipe) => {
    let createIngredientsArray = recipe.ingredients.split(',').map(item => item.trim());
    const newRecipe = {...recipe, ingredients: createIngredientsArray, id: this.state.newRecipeID};    
    const url = this.urlHandler() + '/add';

    axios.post(url, newRecipe)
      .then()
      .catch(function (error){
        console.log(error);
      })

    this.setState((prevState, props) => {
      return {
        newRecipeID: prevState.newRecipeID + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  onDelete = (id) => {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    const url = this.urlHandler() + '/delete';

    this.setState({recipes});
    axios.post(url, {id});    
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => (
      <Recipe key={recipe.id} {...recipe} onDelete={this.onDelete}/>
    ));
    const {showNewRecipeForm} = this.state;
    return (
      <div className="App">
        <div className="app-header">
          <div className="app-name">
            Recipes App
          </div>          
          <button
            type="button"
            onClick={() => this.setState({showNewRecipeForm: true})}
            className="buttons add-new-recipe-button"
          >
            Add new recipe!
          </button>
        </div>
        <div>
          {showNewRecipeForm ? 
            <NewRecipeForm onClose={this.onClose} onSave={this.onSave}/> : null          
          }
        </div>          
        <div className="recipe-list">{recipes}</div>
      </div>
    );
  }
}

export default App;
