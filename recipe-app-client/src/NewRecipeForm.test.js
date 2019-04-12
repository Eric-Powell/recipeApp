import React from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './NewRecipeForm';

let onClose = jest.fn();
let onSave = jest.fn();

it('renders new recipe form without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipeForm onClose={onClose} onSave={onSave}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders title label on new recipe form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipeForm onClose={onClose} onSave={onSave}/>, div);  
  let title = div.getElementsByClassName('new-recipe-title');
  
  expect(title).toHaveLength(1);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ingredients label on new recipe form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipeForm onClose={onClose} onSave={onSave}/>, div);  
  let ingredients = div.getElementsByClassName('new-recipe-ingredients');

  expect(ingredients).toHaveLength(1);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders instructions label on new recipe form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipeForm onClose={onClose} onSave={onSave}/>, div);  
  let instructions = div.getElementsByClassName('new-recipe-instructions');

  expect(instructions).toHaveLength(1);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders instructions label on new recipe form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewRecipeForm onClose={onClose} onSave={onSave}/>, div);  
  let img = div.getElementsByClassName('new-recipe-img');

  expect(img).toHaveLength(1);
  ReactDOM.unmountComponentAtNode(div);
});