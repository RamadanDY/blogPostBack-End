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
  const { title, content, author, slug } = req.body;
  if ((!title, !content, !author, !slug)) return next(404, "no id found");

  try {
    const newPost = new Posts({ title, content, author, slug });
    await newPost.save();
    // 201 is for successfull resoiurce creation
    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return next(createHttpErrors(404, "No ID found"));
  }

  try {
    // Fetch the post to update
    const postToUpdate = await Posts.findById(id);

    if (!postToUpdate) {
      return next(createHttpErrors(404, "Post not found"));
    }

    // Update fields (ensure req.body contains the data you want to update)
    postToUpdate.title = req.body.title || postToUpdate.title;
    postToUpdate.excerpt = req.body.excerpt || postToUpdate.excerpt;
    postToUpdate.content = req.body.content || postToUpdate.content;
    postToUpdate.category = req.body.category || postToUpdate.category;
    postToUpdate.status = req.body.status || postToUpdate.status;
    postToUpdate.slug = req.body.slug || postToUpdate.slug;

    // Save the updated post
    await postToUpdate.save();

    return res.status(200).json(postToUpdate);
  } catch (error) {
    console.error(error);
    return next(createHttpErrors(500, "Server error"));
  }
}

// export async function updatePost(req, res, next) {
//   const { id } = req.params;
//   if (!id) return next(createHttpErrors(404, "no id found"));

//   try {
//     const postToUpdate = Posts.findById(id);

//     // Update the fields of the post with the new data from req.body
//     postToUpdate.title = req.body.title || postToUpdate.title;
//     postToUpdate.excerpt = req.body.excerpt || postToUpdate.excerpt;
//     postToUpdate.content = req.body.content || postToUpdate.content;
//     postToUpdate.category = req.body.category || postToUpdate.category;
//     postToUpdate.status = req.body.status || postToUpdate.status;
//     postToUpdate.slug = req.body.slug || postToUpdate.slug;
//     // Add any other fields you want to update

//     await postToUpdate.save();
//     return res.status(201).json(postToUpdate);
//   } catch (error) {
//     console.log(error);
//     next(createHttpErrors(500, "Server error"));
//   }
// }

// export async function deletePost(req, res) {
//   const { id } = req.params;
//   if (!id) return next(createHttpErrors(400, "no id found"));
//   console.log(id);

//   try {
//     const postId = Posts.findByIdAndDelete(id);
//     if (!postId) return next(createHttpErrors(400, "post couldnt delete"));
//     return res
//       .status(200)
//       .json({ message: "Post deleted successfully", post: postId });
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function deletePost(req, res, next) {
  const { id } = req.params;
  if (!id) return next(createHttpErrors(400, "No ID found"));

  try {
    const postId = await Posts.findByIdAndDelete(id);
    if (!postId) return next(createHttpErrors(404, "Post couldn't be deleted"));

    return res.status(200).json({
      message: "Post deleted successfully",
      post: {
        _id: postId._id,
        title: postId.title,
        slug: postId.slug,
      },
    });
  } catch (error) {
    console.error(error);
    return next(createHttpErrors(500, "Internal server error"));
  }
}
