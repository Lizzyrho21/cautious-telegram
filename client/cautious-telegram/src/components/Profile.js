import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Test from "./Test";

const Profile = ({ profile }) => {
    return (

        <div style={{margin:'0', padding:'0'}}className="grid h-screen main place-items-center">
            
        <div  className="flex flex-col items-center justify-center w-full p-5 duration-300 ease-in-out transform bg-white shadow-lg card text-slate-800 rounded-2xl hover:scale-105">
            <div className="image">
            {profile && profile.images.length && profile.images[0].url && (
                <img
                className="py-2 mx-auto rounded-full w-400 profile"
                src={profile.images[0].url}
                alt="Avatar"
                width="200"
                height="200"
                />
            )}
            </div>

            <div className="name">
            <p className="font-bold">  {profile && profile.display_name}</p>
            </div>

            <div className="Description">
            <p> Illustrator From Memphis, TN 🧑‍💻</p>
            </div>

            <div className="Songs">
                <h6>Liked Songs :</h6>
            <p style={{marginBottom:'3rem'}}>No Music Available!</p>
            </div>

            <Routes>
            <Route path="/create" element={<Test />} />
            </Routes>
            <button className="w-full px-4 py-2 font-semibold text-white transition bg-green-500 rounded-lg shadow-lg hover:bg-blue-600 hover:border-primary hover:bg-primary hover:text-white">
            <Link className="text-white" style={{textDecoration:'none'}} to="/create"> 🎵 Create a Playlist 🎵</Link>
            </button>
        </div>
        </div>
    );
    };

export default Profile;
// {profileData.images.length && profileData.images[0].url &&
