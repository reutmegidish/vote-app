import LogInPage from '../Pages/LogInPage/LogInPage'
import './Main.css'
import VotePage from '../Pages/VotePage/VotePage'
import { usePage } from '../../context/PageContext'

const Main = () => {
  const { currentPage, setCurrentPage, isLogin, setIsLogin } = usePage()

  return <main className="main">{isLogin ? <VotePage /> : <LogInPage />}</main>
}

export default Main
