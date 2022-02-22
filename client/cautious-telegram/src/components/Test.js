import React from 'react'
import { useState, useEffect } from "react";
import { getGenreSeedData } from "../spotify";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
import Paginate from './Paginate';
// import axios for fetching data
//import useeffect  and usestate for storing and upholding data

const Test = () => {
    const [loading, setLoading] = useState(false); // for our loading
  const [userPicks, setUserPicks] = useState([]); // to store our user genre picks
  const [genre, setGenreSelection] = useState([]); // to access spotify genres available
  const [currentPage, setCurrentPage] = useState(1); // for our current page index (page 1)
  const [postsPerPage, setPostsPerPage] = useState(15) // how many pages for our data! about 13 results per page




    // 3. Create out useEffect function
    useEffect(() => {
    
        const fetchGenreData = async () => {
            setLoading(true);
            try {
              const { data } = await getGenreSeedData(); //destructuring to access the data property of the axios response.
              setGenreSelection(data.genres) // setting the state of profile data
                
                } catch (e) {
                console.error(e);
                }
            };
            fetchGenreData();
            setLoading(false);

            
            console.log(genre.length);
            
        },[])
        const indexOfLastGenre = currentPage * postsPerPage;
        const indexOfFirstGenre = indexOfLastGenre - postsPerPage;
        const currentGenres = genre.slice(indexOfFirstGenre, indexOfLastGenre);
        const paginate = (pageNumber) => setCurrentPage(pageNumber); //sets current page!



return (
    <>
  {loading ? (<h1>Loading...</h1>) : (
<>
<h1>Choose 3 Genres</h1>
    <Container fluid>
    <Row>
            {genre && currentGenres.map((el) => {return(
        
        <>
        
                <Col>

            <Card style={{ width: '15rem', height: '6rem', marginTop: '4rem',}}>
        <Card.Body>
            <Card.Title style={{color:'gray'}}>{el}</Card.Title>
        </Card.Body>
        </Card>
        </Col>
    
            </> 
        
                    
            )})}
            </Row>
        </Container>
        </>)}

        <Paginate postsPerPage={postsPerPage} totalGenres={genre.length} paginate={paginate}/>
            
                
            
        

    


    </>
)
}

export default Test