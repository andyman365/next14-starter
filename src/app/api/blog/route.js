import { Post } from "@/app/components/lib/models"
import { connectToDb } from "@/app/components/lib/utils"
import { NextResponse } from "next/server"

export const GET = async(request) => {

    try {
        connectToDb()
        const posts = await Post.find( )

    return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        throw new Error("failed to launch posts")
    }

}