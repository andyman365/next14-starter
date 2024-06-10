'use client'
import React from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { useState } from 'react'
import Image from 'next/image'
const links = () => {

    const links = [
        {link:"/", description: "homepage"},
        {link:"/about", description: "about"},
        {link:"/contact", description: "contact"},
        {link:"/blog", description: "blog"},
        {link:"/serveractiontest", description: "adminpanel"},
      ]

  const [open, setOpen] = useState(false)
  const [session, setSession] = useState(true)
//Tomporary
      //const session = true;
      const isAdmin = true;
  return (
    <div className={styles.container}>
    <div className={styles.links}>    
        
        {links.map(((element) => (
      <NavLink item={element} key={element.description}/>
    )))}

  {session ? ( 
  <>
    { isAdmin &&   <NavLink item={{link: "/admin", description:"admin"}} key="admin"></NavLink>}
   <button className={styles.logout} onClick={() => (setSession((prev) => (!prev)))}>Logout</button>
  </>

  ) : (
    <NavLink item={{link: "/login", description:"login"}}/>

  ) }

  </div>


  <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30}onClick={() => (setOpen((prev) => !prev))} />
  
  {open && (
  <div className={styles.mobileLinks}>
      {links.map((link) => (
        <NavLink item={link} key={link.description}/>

      ))}

    </div>
  )}
   </div>
  )
}

export default links