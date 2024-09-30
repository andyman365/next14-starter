import React from 'react'
import { getUser } from '../lib/data';
import styles from './PostUser.module.css'
import Image from 'next/image';
/* const getUser = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})
    console.log(userId);
    if(!res.ok) {
      throw new Error("something went wrong")
    }
    return res.json()
  
  }
    */
  
const PostUser = async ({userId}) => {
    console.log("userid is " + userId)
    const user = await getUser(userId)
    console.log(user)
  return (
 
    <div className={styles.container}> 
    <Image 
      className={styles.avatar} 
      src={user.image ? user.image : "/noavatar.png"}
      alt="" 
      width={50}
      height={50}>
    </Image>
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>author</span>
      <span className={styles.detailValue}> {user.username}

      </span>
    
    </div>
    </div>
  )
}

export default PostUser