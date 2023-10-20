import Link from 'next/link'
import React from 'react'

export default function Register() {
  return (
    <div>
      Register Page
      <div>
        <p>Already have a account ?</p>
        <Link href = {'/login'}>Login here</Link>
      </div>
    </div>
  )
}
