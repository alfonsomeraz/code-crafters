import { useEffect, useState } from "react"
import { useExamsContext } from '../hooks/useExamsContext'

const Home = () => {
  const {exams, dispatch} = useExamsContext()

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch('/api/exams')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_EXAMS', payload: json})
      }
    }

    fetchExams()
  }, [])

  return (
    <div className="home">
      <div className="exams">
        {exams && exams.map((exam) => (
          <p key={exam._id}>{exam.patientId}</p>
        ))}
      </div>
    </div>
  )
}

export default Home