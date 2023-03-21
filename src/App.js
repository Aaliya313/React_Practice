import './App.css';
import Navbar from './navbar';

function App() {
  const title = "weclome to the new blog";
  const likes = 50;
  const link = "https://instagram.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p> liked {likes} </p>
        <p> {10} </p>

        <a href={link}>instagram</a>
      </div>
    </div>
  );
}

export default App;
