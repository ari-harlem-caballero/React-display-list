
import React from 'react';

export default function Bob({
  name,
  age,
  role
}) {
  return <div className='bobs-div'>
    <img alt={`${name}`} src={ `./${name}.jpg`} width={200} />
    <p className='bob-name'>Name: {name}</p>
    <p className='bob-info'>Age: {age} Role: {role}</p>
  </div>;
}
