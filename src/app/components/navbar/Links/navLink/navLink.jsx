'use client'
import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({item}) => {

    const pathName = usePathname();

  return (
    <div className={styles.container}>

        <Link href={item.link} className={`${styles.container}  ${pathName === item.link && styles.active }`}> {item.description}</Link>
 
    </div>
  )
}

export default NavLink