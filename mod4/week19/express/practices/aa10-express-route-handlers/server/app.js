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
app.use(express.json()); // lets the server know that it should expect the request body to be in json format

// Your code here

//! Remember "npm run dev" to run with nodemon!

//! 1

app.get("/artists", (req, res) => {
  res.status(200).send(getAllArtists()); // Here we return a status code of 200 (OK) and send the return value of our 'getAllArtists' function, which will give us an array with all of the names of the artists in JSON format.
})

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
})

//! 2

app.post("/artists", (req, res) => {

  let newArtist = addArtist(req.body) // Since we want to post (create) a new artist here, we can invoke the addArtist() method which handles all of the logic concerning the creation of an ew artist. All we need to do is pass in the body of our request (which is just a JSON object containing the name of the artist we want to add)

  res.status(201) // Then with our response we return a status code of 201 (CREATED)
    .setHeader("Content-Type", "application/json") // Then we use the .setHeader() method to set the headers of our response
    .send(JSON.stringify(newArtist)); // Finally, we send the response body by using JSON.stringify() to convert our 'newArtist' into the necessary JSON format

  // Note that the .send() method must come LAST when sending responses. We cannot alter the response (add new headers, etc) after the response has already been send.
})

//! 3

//! 4

//! 5

app.get("/artists/:artistId", (req, res) => {
  let artist = getArtistByArtistId(req.params.artistId);

  res.json(artist) // When we use res.json(), it automatically sets the content-type header to application/json AND automatically sets the status code to 200 if successful and it automaticaly sets the body to JSON form.

  //^ Here's the alternative way to do all of these steps explicitly:

  // res.status(200).setHeader("Content-Type", "application/json").send(JSON.stringify(artist));
})

//! 6

app.put("/artists/:artistId", (req, res) => {

  // let artistId = req.params.artistId;

  // let body = req.body;

  // let update = editArtistByArtistId(artistId, body);

  // res.status(200).json(update)

  //!

  const artistId = req.params.artistId;

  const body = req.body;

  const update = editArtistByArtistId(parseInt(artistId), body);

  res.status(200).json(update);

})

app.patch("/artists/:artistId", (req, res) => {

  let artistId = req.params.artistId;

  let body = req.body;

  let update = editArtistByArtistId(artistId, body);

  res.status(200).json(update)

  //!

  // const artistId = req.params.artistId;

  // const body = req.body;

  // const update = editArtistByArtistId(parseInt(artistId), body);

  // res.status(200).json(update);

})

//! 7

app.delete("/artists/:artistId", (req, res) => {

  let artistId = req.params.artistId;

  deleteArtistByArtistId(artistId);

  // res.status(200).json({
  //   "message": "Successfully deleted"
  // })

  res.status(200).json({"message": "Successfully deleted"})
})

//! 8

app.get("/artists/:artistId/albums", (req, res) => {

  const artistId = req.params.artistId;

  const albums = getAlbumsByArtistId(artistId);

  res.json(albums);
})

//! 9

app.get("/albums/:albumId", (req, res) => {

  const albumId = req.params.albumId;

  const album = getAlbumByAlbumId(albumId);

  res.json(album);
})

//! 10

app.post("/artists/:artistId/albums", (req, res) => {

  const artistId = req.params.artistId;

  const body = req.body;

  const add = addAlbumByArtistId(artistId, body); // No need to stringify here

  res.status(201).send(add); // Use .send instead of .json. My guess at why this is the case is that the return value of addAlbumByArtistId must already be in json format.
})

//! 11

app.put("/albums/:albumId", (req, res) => {

  const albumId = req.params.albumId;

  // const album = getAlbumByAlbumId(albumId);

  let data = req.body;

  let edit = editAlbumByAlbumId(albumId, data)

  res.json(edit);
})

app.patch("/albums/:albumId", (req, res) => {

  const albumId = req.params.albumId;

  // const album = getAlbumByAlbumId(albumId);

  let data = req.body;

  let edit = editAlbumByAlbumId(albumId, data)

  res.json(edit);
})

//! 12

app.delete("/albums/:albumId", (req, res) => {

  const albumId = req.params.albumId;

  deleteAlbumByAlbumId(albumId);

  res.json({ "message": "Successfully deleted" })
});

//! 13

app.get("/albums", (req, res) => {

  const letter = req.query.startsWith; // THIS is the method for grabbing a query parameter from a URL.

  // Lets say that the full URL is "/albums?startsWith={letter}"

  // If we want to grab "letter", all we need to do is access the "startsWith" key from the "query" property of the req object.

  let filteredAlbums = getFilteredAlbums(letter); // Now that we have the letter, we can just invoke the getFilteredAlbums(startsWith) method to get the filtered albums

  res.json(filteredAlbums) // Then we use the .json() method to send the filtered albums in JSON form. Recall that this method sets the content-type header, status code, and converts the body to JSON format for us.
})

//! 14

app.get("/songs/:songId", (req, res) => {

  const songId = req.params.songId;

  const song = getSongBySongId(songId);

  res.json(song);
})

//! 15

app.post("/albums/:albumId/songs", (req, res) => { // EVERY single component of the URL matters. If we are missing a slash, colon, or a single letter from any of the components, the request will fail. This should probably be the first thing we check when we throw an error.

  const albumId = req.params.albumId;

  const song = req.body;

  const addSong = addSongByAlbumId(albumId, song);

  res.status(201).json(addSong) // Make sure to check that the status code is correct. The .json() method automatically sends a status code of 200, but sometimes the specs may require that we manually use another status code. In this case, they specify a status code of 201.
});

//! 16

app.get("/artists/:artistId/songs", (req, res) => {

  let artistId = req.params.artistId;

  let songs = getSongsByArtistId(artistId);

  res.json(songs);
})

//! 17

app.get("/albums/:albumId/songs", (req, res) => {

  let albumId = req.params.albumId;

  let songs = getSongsByAlbumId(albumId);

  res.json(songs);
});

//! 18

app.put("/songs/:songId", (req, res) => {

  const songId = req.params.songId;

  const data = req.body;

  const edit = editSongBySongId(songId, data);

  res.send(edit);
})

app.patch("/songs/:songId", (req, res) => {

  const songId = req.params.songId;

  const data = req.body;

  const edit = editSongBySongId(songId, data);

  res.send(edit);
})

//^ Again, note that in these scenarios (put, patch) we do NOT need to use the .json() method on the body. Additionally, the .send() method successfully sets our content-type header and status code for us so that we don't have to set them explicitly.

//! 19

app.delete("/songs/:songId", (req, res) => {

  const songId = req.params.songId;

  deleteSongBySongId(songId);

  const response = { "message": "Successfully deleted" }

  res.json(response);
})

//! 3



// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
