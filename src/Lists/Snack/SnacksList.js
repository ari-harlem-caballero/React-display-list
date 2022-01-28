import React from 'react';
import Snack from './Snack';

export default function SnacksList(props) {
  return <div className='snack-list'>
    {props.snacks.map((snack, i) => <Snack key={`${snack.name}-${i}`} {...snack}/>)}
  </div>;
}

