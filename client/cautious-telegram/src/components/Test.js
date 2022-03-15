import React from "react";
import { useState, useEffect } from "react";
import { getGenreSeedData } from "../spotify";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Paginate from "./Paginate";
// import Playlist from './Playlist';
import { getSongs } from "../spotify";
import Playlist from "./Playlist";
import { Route, Routes, Link } from "react-router-dom";

// import axios for fetching data
//import useeffect  and usestate for storing and upholding data

const Test = () => {
  const [loading, setLoading] = useState(false); // for our loading
  const [userPicks, setUserPicks] = useState([]); // to store our user genre picks

  const [genre, setGenreSelection] = useState([]); // to access spotify genres available
  const [currentPage, setCurrentPage] = useState(1); // for our current page index (page 1)
  const [postsPerPage, setPostsPerPage] = useState(15); // how many pages for our data! about 13 results per page
  const [topSongPicks, setTopSongPicks] = useState([]);

  // 3. Create out useEffect function
  useEffect(() => {
    const fetchGenreData = async () => {
      setLoading(true);
      try {
        const { data } = await getGenreSeedData(); //destructuring to access the data property of the axios response.
        setGenreSelection(data.genres); // setting the state of profile data
      } catch (e) {
        console.error(e);
      }
    };
    fetchGenreData();
    setLoading(false);
  }, []);
  const indexOfLastGenre = currentPage * postsPerPage;
  const indexOfFirstGenre = indexOfLastGenre - postsPerPage;
  const currentGenres = genre.slice(indexOfFirstGenre, indexOfLastGenre);
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //sets current page!

  //Gets genres users select!
  const getGenres = (el) => {
    // push the user selections in array

    setUserPicks([...userPicks, el]);
    //if three stop taking genres
    if (userPicks.length === 3) {
      alert("Genres entered");
      // console.log(userPicks);
      userPicks.forEach((element) => {
        getGenrePlay(element);
      });

      // console.log(genre.length);

      return userPicks;
      //if more than three, chop off the last index.
    } else if (userPicks.length > 3) {
      alert("you have enough!");
      setUserPicks(userPicks.pop(3)); //take out index position 3
      // console.log(userPicks);
      return userPicks;
    }
  };

  // create a function to target endpoint with genres map and passed in.

  const getGenrePlay = async (el) => {
    try {
      // console.log(userPicks)

      //     userPicks.forEach()

      const { data } = await getSongs(el);
      console.log(data);

      // tracks.push(data);
    } catch (e) {
      console.error(e);
    }

    // console.log(topSongPicks)
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Choose a Genre</h1>
          <Container fluid>
            <Row>
              {genre &&
                currentGenres.map((el, idx) => {
                  return (
                    <>
                      <Col key={idx}>
                        <Card
                          style={{
                            width: "15rem",
                            height: "6rem",
                            marginTop: "4rem",
                          }}
                          key={idx}
                        >
                          <Card.Body
                            onClick={() => {
                              getGenres(el);
                            }}
                          >
                            <Card.Title style={{ color: "gray" }}>
                              {el}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </Container>
        </>
      )}

      <Paginate
        postsPerPage={postsPerPage}
        totalGenres={genre.length}
        paginate={paginate}
      />

      {userPicks.length >= 1 ? (
        <Button onClick={getGenrePlay}>Generate</Button>
      ) : undefined}
      <Routes>
        <Route path="/playlist" element={<Playlist tracks={topSongPicks} />} />
      </Routes>
      {topSongPicks.length === 1 ? (
        <button className="w-full px-4 py-2 font-semibold text-white transition bg-green-500 rounded-lg shadow-lg hover:bg-blue-600 hover:border-primary hover:bg-primary hover:text-white">
          <Link
            className="text-white"
            style={{ textDecoration: "none" }}
            to="/playlist"
          >
            {" "}
            🎵 See Generated Playlist! 🎵
          </Link>
        </button>
      ) : null}
      {/* <Playlist tracks={topSongPicks}/> */}
    </>
  );
};

export default Test;
