import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry, The page you are looking for does not exist</p>
        <Link href="/">Back to homepage</Link>

    </div>
  )
}

export default NotFound