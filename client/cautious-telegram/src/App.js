import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Profile from "./components/Profile";
import Test from "./components/Test";
import Playlist from "./components/Playlist";
import boy from "./boy.png";
import { BrowserRouter as Router } from "react-router-dom"; //We need to import here as well!

function App() {
  const [token, setToken] = useState(null); // to store our access token
  const [profile, setProfile] = useState(null); // for our profile data
  const [loading, setLoading] = useState(false); // for our loading
  // const [currentPage, setCurrentPage] = useState(1); // for our current page index (page 1)
  // const [postsPerPage, setPostsPerPage] = useState(10) // how many pages for our data! about 13 results per page

  useEffect(() => {
    setToken(accessToken); // setting our state token to the access token exported!

    // Since getCurrentUserProfile() returns a promise,
    //  we need to wait for the promise to be resolved using await.
    //   Since the await operator can only be used inside async functions,
    //    we handle this by creating an async function called fetchData()
    //     within our useEffect hook and invoking it.
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await getCurrentUserProfile(); //destructuring to access the data property of the axios response.
        setProfile(data); // setting the state of profile data
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
    setLoading(false);
    return () => {
      setProfile(null); // This worked for me
    };
  }, []);

  // console.log(profile);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {!token ? (
            <div className="auth">
              <h1 className="nav">MUSCAPE</h1>
              <h4 className="font-bold nav-h">Inspire your best work</h4>
              <button id="login" className="">
                <a
                  style={{ textDecoration: "none" }}
                  className="relative py-2 font-medium text-white transition duration-300 bg-green-400 rounded-md px-9 hover:bg-green-500 ease"
                  href="http://localhost:3008/login"
                >
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      viewBox="0 0 300 300"
                      className="h-full opacity-100 w-50 object-stretch"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                        fill="#FFF"
                        fillRule="nonzero"
                        fillOpacity=".1"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 h-full -mr-2 w-50">
                    <svg
                      viewBox="0 0 300 300"
                      className="object-cover h-full w-50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                        fill="#FFF"
                        fillRule="nonzero"
                        fillOpacity=".1"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative"> Login To Get Started</span>
                </a>{" "}
              </button>

              <img
                src={boy}
                id="boy_in_space"
                alt="boy meditating in space"
                width="450"
                height="20"
              ></img>
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <nav>
                      <button className="logout" onClick={logout}>
                        Log Out
                      </button>
                    </nav>

                    <Profile profile={profile} />
                  </>
                }
              />

              <Route path="/create" element={<Test />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;
