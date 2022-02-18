import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Profile from "./components/Profile";
import Test from "./components/Test";
import boy from "./boy.png";
import { BrowserRouter as Router } from "react-router-dom"; //We need to import here as well!

function App() {
  const [token, setToken] = useState(null); // to store our access token
  const [profile, setProfile] = useState(null); // for our profile data

  useEffect(() => {
    setToken(accessToken); // setting our state token to the access token exported!

    // Since getCurrentUserProfile() returns a promise,
    //  we need to wait for the promise to be resolved using await.
    //   Since the await operator can only be used inside async functions,
    //    we handle this by creating an async function called fetchData()
    //     within our useEffect hook and invoking it.
    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile(); //destructuring to access the data property of the axios response.
        setProfile(data); // setting the state of profile data
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    return () => {
      setProfile(null); // This worked for me
    };
  }, []);

  console.log(profile);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {!token ? (
            <Button variant="secondary">
              <a
                style={{ textDecoration: "none" }}
                className="App-link"
                href="http://localhost:3008/login"
              >
                Login To Get Started
              </a>{" "}
            </Button>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Logged in!</h1>

                    <Profile profile={profile} />

                    <button onClick={logout}>Log Out</button>
                  </>
                }
              />

              <Route path="/create" element={<Test />} />
            </Routes>
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;
