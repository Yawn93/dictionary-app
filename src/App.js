import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div>
      <div className="container">

      <header className="text-center book">
       📖
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="footer">
        <small>Coded by Beatriz St.Aubyn | Check Github</small>
      </footer>
      </div>
    </div>
  );
}

export default App;
