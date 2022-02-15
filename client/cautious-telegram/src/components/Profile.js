


const Profile = ({profileData}) => {
console.log(profileData) //debug for our data

    return (
    
        <div className="main grid place-items-center h-screen">
        
            <div className="card bg-white text-slate-800 flex flex-col items-center justify-center p-7 shadow-lg rounded-2xl w-64 transform hover:scale-105 duration-300 ease-in-out">
            
                <div className="image">
                {profileData.images.length && profileData.images[0].url && (
                    <img className="profile mx-auto rounded-full py-2 w-20" src={profileData.images[0].url} alt="Avatar"/>
                )}
                </div>
            
                <div className="name">
                    <p>{profileData.display_name}</p>
                </div>
            
                <div className="Description">
                    <p>Writer, Illustrator  🧑‍💻</p>
                </div>

                <div className="Songs">

                    <p>No Music Available!</p>
                </div>
            
                <div>
                    <button className="bg-green-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg  hover:border-primary hover:bg-primary hover:text-white
                     transition">Get Inspired</button>
                </div>
            </div>
        </div>
    )
    }

export default Profile