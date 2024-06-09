import { useEffect, useState } from 'react'
import './LogInPage.css'
import { getData } from '../../../api/api'
import { usePage } from '../../../context/PageContext'

const LogInPage = () => {
  const {
    currentPage,
    setCurrentPage,
    isLogin,
    setIsLogin,
    users,
    setUsers,
    user,
    setUser,
  } = usePage()

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const [error, setError] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getData('users')
        setUsers(data)
      } catch (error) {
        console.log(error, 'fetch data failed')
      }
    }
    getUsers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = users.find((user) => user.email === emailInput)

    if (user.password === passwordInput) {
      setIsLogin(true)
      console.log(isLogin)
      setCurrentPage('vote-page')
      setUser(user)
    } else {
      setError('Invalid email or password')
    }

    return
  }
  return (
    <section className="log-in-section">
      <img src="./images/page_logo.png" alt="page-logo" className="page-logo" />

      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log - In</h1>

        <div className="input-container">
          <label htmlFor="e-mail:">Email:</label>
          <input
            value={emailInput}
            placeholder="please insert your emil"
            type="email"
            onChange={(e) => setEmailInput(e.target.value)}
            name="email"
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            value={passwordInput}
            placeholder="please insert your password"
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
            name="password:"
          />
        </div>

        <button type="submit">Log - In</button>
      </form>
    </section>
  )
}

export default LogInPage
