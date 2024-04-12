import React from 'react';
import './App.css';
import Header from './Components/Header';
import AboutSwami from './Components/AboutSwami';
// import Quotes from './Components/Quotes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutSwami/>
        {/* <Quotes /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
