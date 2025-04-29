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

// export async function getSinglePost(req, res, next) {
//   const { id } = req.params;

//    if (!id) {
//     return next(createHttpErrors(400, "ID is required"));
//   }

//    console.log("ID received:", id);

//    if (!mongoose.Types.ObjectId.isValid(id)) {
//     return next(createHttpErrors(400, "Invalid ID format"));
//   }

//   try {
//      const singlePost = await Posts.findById(id);
//     console.log("Post found:", singlePost);

//      if (!singlePost) {
//       return next(createHttpErrors(404, "Post not found"));
//     }

//      res.status(200).json(singlePost);
//   } catch (err) {
//     console.error("Error finding post:", err);
//     return next(createHttpErrors(500, "Internal Server Error"));
//   }
// }

export async function getSinglePost(req, res, next) {
  const { id } = req.params;
  if (!id) return next(createHttpErrors(404, "no id found"));
  try {
    const singlePost = await Posts.findById(id);
    console.log(singlePost);
    if (!singlePost) return next(createHttpErrors(404, "post not found"));
  } catch (err) {
    console.log(err, "no post found");
  }
}

export async function createPost(req, res, next) {
  const { title } = req.body;
  if (!title) return next(404, "no id found");

  try {
    const newPost = new Posts({ title });
    await newPost.save();
    // 201 is for successfull resoiurce creation
    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(req, res) {
  res.send("hmmnbhh");
}

export async function deletePost(req, res) {
  res.send("Delete post");
}
