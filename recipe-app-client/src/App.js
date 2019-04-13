import React, { Component } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import NewRecipeForm from './NewRecipeForm';
import './App.css';
// import 'typeface-cookie';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showNewRecipeForm: false,
      newRecipeID: 0
    };

  }

  componentDidMount() {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        let highestIdx = response.data.map(item => item.id).sort((a, b) => b - a).shift() + 1;
        this.setState({recipes: response.data, newRecipeID: highestIdx})
      })
      .catch(function (error){
        console.log(error);
      })
  }

  onClose = () => (
    this.setState({showNewRecipeForm: false})
  )

  onSave = (recipe) => {
    const newRecipe = {...recipe, id: this.state.newRecipeID}

    axios.post('http://localhost:5000/add', newRecipe)
      .then(res => console.log(res.data))
      .catch()

    this.setState((prevState, props) => {
      return {
        newRecipeID: prevState.newRecipeID + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  onDelete = (id) => {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
    axios.post('http://localhost:5000/recipes/delete', {id});    
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
