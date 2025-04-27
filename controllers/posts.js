import Posts from "../models/posts.js";
import createHttpErrors from "http-errors";

export async function getAllPosts(req, res) {
  try {
    const Allposts = await Posts.find();
    console.log(Allposts);
    if (!Allposts)
      return next(createHttpErrors(404, "counldm=nt get all the posts "));

    res.send(json(Allposts)).status(404);
  } catch (err) {
    console.log(err);
  }
}

export async function getSinglePost(req, res) {
  res.send("grrr");
}

export async function updatePost(req, res) {
  res.send("hmmnbhh");
}

export async function createPost(req, res) {
  res.send("createPost");
}

export async function deletePost(req, res) {
  res.send("Delete post");
}
