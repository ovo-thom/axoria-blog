import { connectToDB } from "@/lib/utils/db/connectToDB";
import { Post } from "@/lib/models/post";
import { Tag } from "@/lib/models/tag";

export async function getPost(slug) {
  try {
    await connectToDB();

    const post = await Post.findOne({ slug }).populate({
      path: "tags",
      select: "name slug"
    })
    console.log("post", post);
    

    return post;
  } catch (err) {
    console.log("Error while fetch a post", err);
    throw new Error("Failed to fetch post");
  }
}

export async function getPosts() {
  try {
    await connectToDB();
    const posts = await Post.find({});

    return posts
  } catch (err) {}
}
