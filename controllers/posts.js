import mongoose from "mongoose";
import Posts from "../models/posts.js";
import createHttpErrors from "http-errors";

export async function getAllPosts(req, res, next) {
  try {
    const Allposts = await Posts.find({});
    console.log(Allposts);
    if (!Allposts)
      return next(createHttpErrors(404, "counldnt get all the posts "));

    res.status(200).json({ Allposts });
  } catch (err) {
    console.log(err);
  }
}

export async function getSinglePost(req, res, next) {
  const { id } = req.params;

  // Check if ID is provided
  if (!id) {
    return next(createHttpErrors(400, "ID is required"));
  }

  // Log the ID received in the request
  console.log("ID received:", id);

  // Validate the ObjectId format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(createHttpErrors(400, "Invalid ID format"));
  }

  try {
    // Find the post by ID
    const singlePost = await Posts.findById(id);
    console.log("Post found:", singlePost); // Log the post to see what was found

    // If no post is found, return an error
    if (!singlePost) {
      return next(createHttpErrors(404, "Post not found"));
    }

    // Return the found post
    res.status(200).json(singlePost);
  } catch (err) {
    console.error("Error finding post:", err);
    return next(createHttpErrors(500, "Internal Server Error"));
  }
}

// export async function getSinglePost(req, res, next) {
//   const { id } = req.params;
//   if (!id) return next(createHttpErrors(404, "no id found"));
//   try {
//     const singlePost = await Posts.findById(id);
//     console.log(singlePost);
//     if (!singlePost) return next(createHttpErrors(404, "post not found"));
//   } catch (err) {
//     console.log(err, "no post found");
//   }
// }

export async function updatePost(req, res) {
  res.send("hmmnbhh");
}

export async function createPost(req, res) {
  res.send("createPost");
}

export async function deletePost(req, res) {
  res.send("Delete post");
}
