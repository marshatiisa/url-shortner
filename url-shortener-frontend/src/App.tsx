import React from 'react';
import './App.css';
import UrlShortenerForm from './components/UrlShortenerForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <UrlShortenerForm />
      </header>
    </div>
  );
};

export default App;
