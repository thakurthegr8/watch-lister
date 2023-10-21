import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    
    <div>
      Login Page

      <div>
      <p>Don&apos;t have an account ?</p>
      <Link href="/register">Register</Link>
      </div>
    </div>
  )
}
