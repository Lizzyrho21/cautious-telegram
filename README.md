# cautious-telegram
Storybeats App!

Hello! Thanks for joining me on this progress journey to building my Storybeats app.

________
Technologies:

Client side application:
**React**,
**Tailwind.CSS**,
**Bootstrap** 

Server side applications:
**NodeJs**
**Express/Axios**

Database applications:
**Postgres**


Deployment:
**Docker**,
**Heroku**

_____

Phase I: 

  Initalize Setup:
  * Creating Client Folder :
     - React-app
     - Tailwind.css
     - Bootstrap 

  * Creating Server Folder :

    - Express Generator? 
    - NodeJS
    - Express
    - Axios
    - Nodemon
    - Spotify API



Login page:
- Utilize Spotify Authorization 


I. Server Side Configuration
References:

[Spotify Auth flow with NodeJS & Express](https://www.newline.co/courses/build-a-spotify-connected-app/welcome)

 [Conditional Rnedering](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications)

[React Router v6 tutorial](https://blog.logrocket.com/react-router-v6/)
[React-Router v6 explanation](https://ui.dev/react-router-nested-routes)
[UseEffect](https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le)
_________

  Next steps as of 02/12/2022: 
  Client side authorization implementation

  STRETCH GOALS: Implement Refresh token

  ERRORS ENCOUNTERED: The spotify authorization flow is no longer working. I have tried to hit the /login endpoint with my client and server side. I am not sure what is causing the problem. Go back through the tutorial and see what you can do to make it work again. Take any notes once issue is resolved.


  02/18/2022
  What is the goal for today? 
  - When user clicks 'get inspred button', the following will return:
  - User input 'Select your top 3 Genres'
  (HTTP Request to spotify API (get genre list) to return genre list in user input select)
 


02/20/2022 = 02/21/2022
What is the goal?
- Is there a way to refresh the access token once the server is started again? Will that issue take care of itself once the site is deployed??
 - Recieve Genre data ( store selected genres in array and check if 3 request is fulfilled. if True, add 'generate' button once Genres are selected and keep user from entering more than 3, if false, hide button) 
  - Generate 15 songs (1 genre = 5 songs) 
  - Store in Playlist
  - STRETCH - SONG LIST SHOWN & MUSIC PLAYER

