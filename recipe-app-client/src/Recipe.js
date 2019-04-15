import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const {title, ingredients, instructions, img, id, onDelete} = this.props;
    const ingredientsList = ingredients.map((ing, i) => {
      return (
        <li key={`${title}-${i}`}>{ing}</li>
      )
    });

    const titleCase = (str) => {
      return str.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    };

    return (
      <div className="recipe">
        <img src={img} alt={title}/>
        <div className="info-wrapper">              
          <div className="title">{titleCase(title)}</div>              
          <div className="item-label">Ingredients: 
            <div className="ingredients">{ingredientsList}</div>
          </div>
          <div className="item-label">Instructions: 
            <div className="instructions">{instructions}</div>
          </div>
        </div>
          <button className="delete-button" type="button" onClick={() => onDelete(id)}>DELETE</button>  
      </div>
    );
  }
}

export default Recipe;