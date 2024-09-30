import PostCard from "../components/postCard/postCard"
import styles from './blog.module.css'
import { getUser, getUsers, getPost, getPosts } from "../components/lib/data"
//get data with api
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}})
  if(!res.ok) {
    throw new Error("something went wrong")
  }
  return res.json()
}

const BlogPage = async () => {
  //get data with api
const posts = await getData()
// const posts = await getPosts()
console.log(posts[0].title)

  return (
    <div className={styles.container}>

      {posts.map((post) => ( 
      <div className={styles.post} key={post.id}>
      <PostCard post={post}/>
    </div>

      ))}


      
    </div>
   
  )
}

export default BlogPage