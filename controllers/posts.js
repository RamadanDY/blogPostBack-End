import Posts from "../models/posts.js";

export async function getAllPosts(req, res) {
  try {
    const Allposts = await Posts.find().populate({ path: "title" });
    console.log(Allposts);
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
