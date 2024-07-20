import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WhatsNewPage from './Components/WhatsNewPage';
import WhatWeProducePage from './Components/WhatWeProducePage';
import AboutUs from './Components/AboutUs';
import Opportunities from './Components/Opportunities';
import Footer1 from './Components/Footer1';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatsNewPage />
      <WhatWeProducePage />
      <AboutUs />
      <Opportunities />
      <Footer1 />
    </div>
  );
}

export default App;
