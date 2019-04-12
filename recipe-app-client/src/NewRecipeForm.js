import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewRecipeForm.css'

class NewRecipeForm extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: [''],
      instructions: '',
      img: ''
    }
  }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleChangeIngred = (e) => {
    if (e.target.value) {
      let setIngArray = e.target.value.split(",").map(item => item.trim());
      this.setState({ingredients: setIngArray});
    } else {
      this.setState({ingredients: ['']});
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      ingredients: [''],
      instructions: '',
      img: ''
    });
  }

  render() {
    const {title, img, instructions, ingredients} = this.state;
    const {onClose} = this.props;
    return (
      <div className="form-wrapper">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="button" className="close-button" onClick={onClose}>X</button>

          <div className="title-wrapper">
            <label className='new-recipe-title'>Title: </label>
            <input 
              name='title' 
              value={title}
              required={true}
              type='text'
              onChange={this.handleChange} />
          </div>
          
          <div className="ingredients-wrapper">
            <label className='new-recipe-ingredients'>Ingredients: </label>
              <input 
                name='ingredients'
                placeholder='lemon, salt, ginger'
                value={ingredients}
                required={true}
                type='text'
                onChange={this.handleChangeIngred} />
          </div>

          <div className="instructions-wrapper">
            <div>
              <label className='new-recipe-instructions'>Instructions: </label>
            </div>            
            <textarea 
              name='instructions' 
              value={instructions}
              required={true}
              type='text'
              rows='10'
              onChange={this.handleChange} />
          </div>

          <div className="img-wrapper">
            <label className='new-recipe-img'>Image url: </label>
            <input 
              name='img' 
              value={img}
              required={true}
              type='text'
              size={40}
              onChange={this.handleChange} />
          </div>
          
          <div className="save-button-wrapper">
            <button
              type="submit"
              className="buttons save-button"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>     
    )
  }
}

export default NewRecipeForm;