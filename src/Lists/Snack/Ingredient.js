import React from 'react';

export default function Ingredient({
  name,
  amount
}) {
  return <div className='ingredients'>
    <p>Name: {name}, Amount: {amount}</p>
  </div>;
}
