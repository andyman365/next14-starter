import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

// const users = [
//     {id:1, name:"john"},
//     {id:2, name:"jane"}
// ]

// const posts = [
//     {id:1, title: 'post1' , body:".....", userId:1},
//     {id:2, title: 'post2' , body:".....", userId:1},
//     {id:3, title: 'post3' , body:".....", userId:2},
//     {id:4, title: 'post4' , body:".....", userId:2}

// ]
export const getPosts = async() => {
    noStore();
    try {
        
        await connectToDb();
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
        throw new error("failed to lload posts")
    }

}

export const getPost = async(slug) => {
    noStore()
    try {
        connectToDb();
        const post = await Post.findOne({slug})
        return post
    } catch (error) {
        console.log(error)
        throw new Error("failed to lload post data")
    }


  ;   
}

export const getUser = async(userId) => {
    noStore()
    try {
        connectToDb();
        console.log(userId)
        const user = await User.findById(userId)
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
     ;   
}

export const getUsers = async(userId) => {
    noStore()
    try {
        connectToDb();
        const users = await User.find()
        return users 
    } catch (error) {
        console.log(error)
        throw new Error("failed to lload users")
    }
     ;   
}