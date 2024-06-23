import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhatsNewPage from './Components/WhatsNewPage';
import WhatWeProducePage from './Components/WhatWeProducePage';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatsNewPage />
      <WhatWeProducePage />
      <AboutUs />
    </div>
  );
}

export default App;
