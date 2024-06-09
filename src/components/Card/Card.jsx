const PATH_IMG = './images/contestants'
import { useEffect } from 'react'
import './Card.css'
import { usePage } from '../../context/PageContext'
import { updateUserVoted } from '../../api/api'

const Card = ({ name }) => {
  const {
    contestants,
    setContestants,
    users,
    setUsers,
    isLogin,
    setIsLogin,
    user,
    setUser,
  } = usePage()

  const userVoted = user.voted

  const HandleVoteBtn = async () => {
    console.log(name)
    try {
      await updateUserVoted('users', user.id, name)

      setUser((prevUser) => ({ ...prevUser, voted: name }))
    } catch (error) {
      console.error('Error updating voted status:', error)
    }
  }

  // // HandleVoteBtn
  // useEffect(() => {
  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div
      className={`${
        userVoted === name ? 'voted card-container' : 'card-container'
      }`}
    >
      <img src={`${PATH_IMG}/${name}.png`} alt="contestants-img" />
      <p>{name}</p>
      <button onClick={HandleVoteBtn} className="card-btn">
        {userVoted === '' ? 'vote' : 'change vote'}
      </button>
    </div>
  )
}

export default Card
