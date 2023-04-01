import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className="container">

      <header className="text-center book">
       📖
      </header>
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className="footer">
        <small>Coded by <a href="https://my-portfolio-beatriz.netlify.app/">Beatriz St.Aubyn</a> 👩‍💻 <a href="https://github.com/Yawn93">Github</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
