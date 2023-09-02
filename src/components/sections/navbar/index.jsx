import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className = {styles.container}>
      <div className="logo">
        <h1 className="text-3xl font-bold underline">Logo</h1>
      </div>
      <div>
        <button className={styles.nav_btn}>Home</button>
        <button className={styles.nav_btn}>About</button>
        <button className={styles.nav_btn}>Contact</button>
      </div>
      <div className={styles.search}>
        <input type="text" />
        <button className={styles.serach_logo }>Search</button>
      </div>
      <div>
        <button className={styles.auth_btn}>Login</button>
        <button className={styles.auth_btn}>Sign up</button>
      </div>
    </div>
  )
}
