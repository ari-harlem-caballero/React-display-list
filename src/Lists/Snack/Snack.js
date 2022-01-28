import React from 'react';
import IngredientList from './IngredientList';

export default function Snack({
  name,
  type,
  img,
  ingredients
}) {
  return <div className='snack-div'>
    <h3>{name}</h3>
    <p>Type: {type}</p>
    <img alt={name} src={img}/>
    <div className='ingredients-div'>
      <IngredientList ingredients={ingredients} />
    </div>
  </div>;
}
