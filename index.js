//import json
const jsonServer = require('json-server')

//creae the server
const MediaPlayerServer= jsonServer.create()

//middleware to parse json format
const middleware=jsonServer.defaults()

//setup path to store data
const router=jsonServer.router('db.json')

MediaPlayerServer.use(middleware)
MediaPlayerServer.use(router)





//port for server 
const PORT =4000 ||process.env.PORT

//to listen to the rquest from the frontend for resolving that request
MediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at the port ${PORT}`);
    
})