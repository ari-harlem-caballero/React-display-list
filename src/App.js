import './App.css';
import QuotesList from './Lists/Quote/QuotesList';
import { quotesArr } from './Lists/Quote/quotes-data';

import BobsList from './Lists/Bob/BobsList';
import { bobsArr } from './Lists/Bob/bobs-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <h2>The Office Quotes</h2>
      <QuotesList quotes={quotesArr} />
      <h2>Bobs Burgers Characters</h2>
      <BobsList bobs={bobsArr} />
    </div>
  );
}

export default App;
