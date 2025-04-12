import { signIn } from '@/auth'
import React from 'react'

const SignIn = ({}) => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}

export default SignIn
