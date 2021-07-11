const db = require("../db/dbConfig");

const getAllSongs = async ()=>{
    try{
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    }catch (err) {
        return err;
    }
}
const getSongs = async (id)=>{
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (error) {
        return error
    }
}
const newSongs = async (song)=>{
    try {
        const createSongs = await db.one(
        "INSERT INTO songs (name, artist, album, time, url, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
        [song.name, song.artist, song.album, song.time, song.url, song.is_favorite])
        return createSongs
    } catch (error) {
        return error
    }
}
const deleteSong = async (id)=>{
 try {
     const delet = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id)
     return delet
 } catch (error) {
     return error
 }
}
const updateSong = async (id, song)=>{
    try {
        const update = await db.one(
            "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
            [
              song.name,
              song.artist,
              song.album,
              song.time,
              song.is_favorite,
              song.id,
            ],
          );
          return update
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongs, getSongs, newSongs, deleteSong, updateSong };