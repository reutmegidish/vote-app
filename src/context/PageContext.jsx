import { createContext, useState, useContext } from 'react'

// Create the context
const PageContext = createContext()

// Create a provider component
export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('Login') // Default page
  const [contestants, setContestants] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isLogin,
        setIsLogin,
        contestants,
        setContestants,
        users,
        setUsers,
        user,
        setUser,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

// Create a custom hook to use the PageContext
export const usePage = () => {
  return useContext(PageContext)
}
