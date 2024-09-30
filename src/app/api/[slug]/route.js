import { Post } from "@/app/components/lib/models"
import { connectToDb } from "@/app/components/lib/utils"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {

    const {slug} = params;
    try {
        connectToDb()
        const post = await Post.findOne({slug} )

    return NextResponse.json(post)
    } catch (error) {
        console.log(error)
        throw new Error("failed to launch post")
    }

}