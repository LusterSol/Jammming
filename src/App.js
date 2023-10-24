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
        <SearchBar />
      </body>
    </div>
  );
}

export default App;
