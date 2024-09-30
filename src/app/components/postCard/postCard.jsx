import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
        {post.image ? (
  <div className={styles.imgContainer}>
    <Image src={post.image} alt="" fill className={styles.img} />
  </div>
) : (
  <div className={styles.imgContainer}>
    <Image src="/path/to/default-image.jpg" alt="Default Image" fill className={styles.img} />
  </div>
)}
            <span  className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.description}</p>
            <Link className={styles.link} href={"/blog/" + post.slug}> read more</Link>
        </div>
    </div>
  )
}

export default PostCard