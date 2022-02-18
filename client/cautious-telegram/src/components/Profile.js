
const Profile = ({profile}) => {


    return (
    
        <div className="grid h-screen main place-items-center">
        
            <div className="flex flex-col items-center justify-center w-64 duration-300 ease-in-out transform bg-white shadow-lg card text-slate-800 p-7 rounded-2xl hover:scale-105">
            
                <div className="image">
                { profile && profile.images.length && profile.images[0].url &&
                
                    (
                    <img className="w-20 py-2 mx-auto rounded-full profile" src={profile.images[0].url} alt="Avatar"/>
                    )
                    }
                </div>
            
                <div className="name">
                    <p>{ profile && profile.display_name}</p>
                </div>
            
                <div className="Description">
                    <p>Writer, Illustrator  🧑‍💻</p>
                </div>

                <div className="Songs">

                    <p>No Music Available!</p>
                </div>
            
                <div>
                    <button className="w-full px-4 py-2 font-semibold text-white transition bg-green-500 rounded-lg shadow-lg hover:bg-blue-600 hover:border-primary hover:bg-primary hover:text-white">Get Inspired</button>
                </div>
            </div>
        </div>
    )
    }
    export default Profile;
// {profileData.images.length && profileData.images[0].url &&