import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { accessToken, logout } from './spotify';

function App() {

  const [token, setToken] = useState(null);  // to store our access token

  useEffect(() => {
    setToken(accessToken); // setting our state token to the access token exported!

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!token ? (
          <a className="App-link" href="http://localhost:3008/login">
            Log in to Spotify
          </a>
        ) : (
          <>
          <h1>Logged in!</h1>
          <button onClick={logout}>Log Out</button>
          </>
        
        )}
        
      </header>
    </div>
  );
}

export default App;
