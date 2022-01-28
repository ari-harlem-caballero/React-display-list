import './App.css';
import QuotesList from './Lists/Quote/QuotesList';
import { quotesArr } from './Lists/Quote/quotes-data';

import BobsList from './Lists/Bob/BobsList';
import { bobsArr } from './Lists/Bob/bobs-data';

import MusicList from './Lists/Music/MusicList';
import { musicArr } from './Lists/Music/music-data';

import SnacksList from './Lists/Snack/SnacksList';
import { snacksArr } from './Lists/Snack/snacks-data';
// import your arrays here

function App() {
  return (
    <div className="App">
      <h2>The Office Quotes</h2>
      <QuotesList quotes={quotesArr} />
      <h2>Bobs Burgers Characters</h2>
      <BobsList bobs={bobsArr} />
      <h2>Favorite Artist and Album</h2>
      <MusicList musics={musicArr} />
      <h2>Favorite Snacks:</h2>
      <SnacksList snacks={snacksArr} />
    </div>
  );
}

export default App;
