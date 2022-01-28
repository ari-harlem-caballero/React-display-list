import React from 'react';
import Quote from './Quote';

export default function QuotesList(props) {
  return <div className='quotes-list'>
    {props.quotes.map((quote, i) => <Quote key={`${quote}-${i}`} name={quote} />)}

  </div>;
}

