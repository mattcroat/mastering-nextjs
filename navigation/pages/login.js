import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault()

    router.push('/dashboard')
  }

  return (
    <>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="button" onClick={handleLogin}>Log In</button>
    </>
  )
}

export default Login
