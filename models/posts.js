import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    excerpt: {
      type: String,
      trim: true,
      maxlength: [500, "Excerpt cannot exceed 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },
    category: {
      type: String,
      trim: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Slug is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const posts = model("posts", postSchema);

export default posts;
// {
//   "title": "Understanding JavaScript Closures",
//   "excerpt": "This post dives into how closures work in JavaScript and why they're useful.",
//   "content": "Closures are a fundamental concept in JavaScript. They allow functions to access variables from an enclosing scope, even after that scope has returned...",
//   "author": "66337b1c2d8f8f1f2b9a5a6c",
//   "tags": ["JavaScript", "Programming", "Closures"],
//   "category": "Web Development",
//   "status": "published",
//   "slug": "understanding-javascript-closures"
// }
