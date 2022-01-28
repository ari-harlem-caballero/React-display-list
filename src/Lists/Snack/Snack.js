import React from 'react';

export default function Snack({
  name,
  type,
  img,
  ingredients
}) {
  return <div className='snack-div'>
    <p>Name: {name}</p>
    <p>Type: {type}</p>
    <img alt={name} src={img}/>
    <div className='ingredients-div'>
      
    </div>
  </div>;
}
