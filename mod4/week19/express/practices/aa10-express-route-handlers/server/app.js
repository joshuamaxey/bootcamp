// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
})

// Your code here

//! Remember "npm run dev" to run with nodemon!

app.get("/artists", (req, res) => {
  res.status(200).send(getAllArtists()); // Here we return a status code of 200 (OK) and send the return value of our 'getAllArtists' function, which will give us an array with all of the names of the artists in JSON format.
})

app.post("/artists", (req, res) => {

  let newArtist = addArtist(req.body) // Since we want to post (create) a new artist here, we can invoke the addArtist() method which handles all of the logic concerning the creation of an ew artist. All we need to do is pass in the body of our request (which is just a JSON object containing the name of the artist we want to add)

  res.status(201) // Then with our response we return a status code of 201 (CREATED)
    .setHeader("Content-Type", "application/json") // Then we use the .setHeader() method to set the headers of our response
    .send(JSON.stringify(newArtist)); // Finally, we send the response body by using JSON.stringify() to convert our 'newArtist' into the necessary JSON format

  // Note that the .send() method must come LAST when sending responses. We cannot alter the response (add new headers, etc) after the response has already been send. 
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
