import { useEffect } from 'react'
import { getData } from '../../../api/api'
import { usePage } from '../../../context/PageContext'
import Card from '../../Card/Card'

import './VotePage.css'

const VotePage = () => {
  const { contestants, setContestants } = usePage()

  useEffect(() => {
    const getContestants = async () => {
      try {
        const data = await getData('contestants')
        setContestants(data)
      } catch (error) {
        console.log(error, 'fetch data failed')
      }
    }

    getContestants()
  }, [setContestants])

  return (
    <section className="vote-page">
      <div className="vote-page-container">
        {contestants.length > 0 &&
          contestants.map((contestant) => (
            <Card key={contestant.name} name={contestant.name} />
          ))}
      </div>
    </section>
  )
}

export default VotePage
