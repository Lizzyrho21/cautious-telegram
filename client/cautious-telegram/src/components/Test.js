import React from 'react'
import { useState, useEffect } from "react";
import { getGenreSeedData } from "../spotify";
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';
// import axios for fetching data
//import useeffect  and usestate for storing and upholding data

const Test = () => {
  const [userPicks, setUserPicks] = useState([]); // to store our user genre picks
  const [genre, setGenreSelection] = useState([]); // to access spotify genres available


    // 3. Create out useEffect function
    useEffect(() => {
    
        const fetchGenreData = async () => {
            try {
              const { data } = await getGenreSeedData(); //destructuring to access the data property of the axios response.
              setGenreSelection(data.genres) // setting the state of profile data
                
                } catch (e) {
                console.error(e);
                }
            };
            fetchGenreData();
            console.log(genre.length);
            
        },[])



return (
    <>

<h1>Choose 3 Genres</h1>
    <Container fluid>
    <Row>
            {genre && genre.map((el) => {return(
        
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
            
                
            
        

            {/* <div class="px-3 py-20 flex flex-wrap overflow-hidden lg:-mx-2 ">
            <div class=" font-bold text-xl mb-2 mt-4 text-gray-700">{el}</div>
        </div> 
        </div> */}


    </>
)
}

export default Test