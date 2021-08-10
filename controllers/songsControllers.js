const express = require("express");
const songs = express.Router();
// const articule = require("../Length");
const {
  getAllSongs,
  getSongs,
  newSongs,
  deleteSong,
  updateSong,
} = require("../quries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const oneSong = await getSongs(id);
    if (oneSong["id"]) {
      res.json(oneSong);
    } else {
      throw id;
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: "Id not found", message: `There is not an ${error}` });
  }
});

songs.post("/", async (req, res) => {
  const { name } = req.body;

  if (!req.body.name) {
    res.status(422).json({ success: false, payload: "include name field" });
    return;
  }

  //   req.body.artist = articule(req.body.artist);
  try {
    const createSongs = await newSongs(req.body);
    if (name) {
      res.json({
        success: true,
        payload: createSongs,
      });
    } else {
      throw createSongs;
    }
  } catch (error) {
    res.status(404).json({
      error: "No new information has been add to DB ",
      message: `This post has end in a error ${error}`,
    });
  }
});
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const delet = await deleteSong(id);
    if (delet["id"]) {
      res.status(200).json(delet);
    } else {
      throw `Couldn't delete song id:${id}`;
    }
  } catch (error) {
    res.status(404).json({
      error: "No information has been delete from DB ",
      message: `This post has end in a error ${error}`,
    });
  }
});
songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const update = await updateSong(id, req.body);
    if (update["id"]) {
      res.status(200).json({
        success: true,
        payload: update,
      });
    } else {
      throw `Couldn't update song id:${id}`;
    }
  } catch (error) {
    res.status(404).json({
      error: "No new information has been update to DB ",
      message: `This post has end in a error ${error}`,
    });
  }
});
module.exports = songs;
