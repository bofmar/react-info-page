import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function toggle() {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggle} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}

export default App;
