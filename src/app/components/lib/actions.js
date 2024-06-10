"use server"
import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"

export const sayHello = async () => {
    
    console.log("hello")

}


export const addPost = async (post) => {
  
    //formdata gets automatically past in a form
    //you can assign it one by one
    // const title = post.get("title")
    // const description = post.get("description")
    // const image = post.get("image")
    // const slug = post.get("slug")
    // const userId = post.get("userId")

    // or you can assign it destructuring
    const {title, description, slug, userId, image} = Object.fromEntries(post);
    console.log(post);
    console.log(title , description , image ,slug , userId );
    try {
        connectToDb()
        const NewPost = new Post({
            title,
            description,
            slug,
            userId,
            image

        })
        await NewPost.save();
        console.log("saved to db")
        revalidatePath("/blog")
    } catch (error) {
        throw new Error(error)
    }
}

export const deletePost = async (post) => {
    
    // or you can assign it destructuring
    const {id} = Object.fromEntries(post);
    console.log(post);
    try {
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log(id)
        console.log("deleted from db")
        revalidatePath("/blog")
    } catch (error) {
        throw new Error(error)
    }
}