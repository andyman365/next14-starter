import React from 'react'
import { addPost, deletePost, sayHello } from '../components/lib/actions'

const ServerActionTestPage = () => {
  return (
    <div>
        <form action={addPost}>

            <input type='text' placeholder='title' name="title"></input>
            <input type='text' placeholder='desccription' name="description"></input>
            <input type='text' placeholder='image' name="image"></input>
            <input type='text' placeholder='slug' name="slug"></input>
            <input type='text' placeholder='userId' name="userId"></input>
            <button> Test me</button>
        </form>

        <form action={deletePost}>

            <input type='text' placeholder='title' name="id"></input>
            <button> delete post</button>
        </form>
    </div>
  )
}

export default ServerActionTestPage