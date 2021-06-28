const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

//Get requests, to get back a list of all Posts
router.get("/", async (req, res) => {
  const listsOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});
//Post requests at local host. And input into mySQL database
router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});
module.exports = router;
