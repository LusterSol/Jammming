import './App.css';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Jammming</h1>
      </header>
      <body>
        <h2 className='subtitle'>Build your Playlist</h2>
        <div className='search-bar-container'>
          <SearchBar />
        </div>
      </body>
    </div>
  );
}

export default App;
