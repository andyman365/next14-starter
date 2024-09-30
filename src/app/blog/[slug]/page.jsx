import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/app/components/postUser/PostUser'
import { getUser,getUsers,  getPost, getPosts } from '@/app/components/lib/data'
//get data via api
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/${slug}` , {next:{revalidate:3600}})
  if(!res.ok) {
    throw new Error("something went wrong")
  }
  return res.json()
}

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost((slug));

  return {
    title: post.title,
    description: post.description
  }

}

const BlogPage = async ({params}) => {
  const {slug} = params;
  console.log(params)

  //get data via api
  const post = await getData(slug)
  //const post = await getPost((slug))
  console.log (post)
    console.log(post.userId)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          className={styles.img}
          src={post.image}
          alt="" 
          fill>
        </Image>
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>

        <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}/> 
          </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>published</span>
          <span className={styles.detailValue}> 01.02.24</span>
        </div>
        </div>
        <div className={styles.content}>
          {post.description}
        </div>
       </div>
    </div>
  )
}

export default BlogPage