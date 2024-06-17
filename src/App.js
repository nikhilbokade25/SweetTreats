import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhatsNewPage from './Components/WhatsNewPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatsNewPage />
    </div>
  );
}

export default App;
