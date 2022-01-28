import './App.css';
import QuotesList from './Lists/Quote/QuotesList';
import { quotesArr } from './Lists/Quote/quotes-data';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <QuotesList quotes={quotesArr} />
    </div>
  );
}

export default App;
