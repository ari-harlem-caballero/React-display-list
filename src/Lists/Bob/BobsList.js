import React from 'react';
import Bob from './Bob';

export default function BobsList(props) {
  return <div className='bobs-list'>
    {props.bobs.map((bob, i) => <Bob key={`${bob.name}-${i}`} {...bob} />)}
    
  </div>;
}

