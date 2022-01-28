import React from 'react';

export default function Ingredient({
  name,
  amount
}) {
  return <div className='ingredients'>
    <p> <span className='ingredient-name'>{name}</span> ---  {amount}</p>
  </div>;
}
