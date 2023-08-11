import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NoResults = () => {
  const secondLimit = 10000
  const second = 1000
  const [counter, setCounter] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const interval = setTimeout(() => {
      navigate('/')
    }, secondLimit)
    return () => clearInterval(interval)
  }, [navigate])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => prevState - 1)
    }, second)
    return () => clearInterval(interval)
  }, [counter])

  return (
    <div className="no-results">
      <h2 className="no-results__title">Такой страницы не существует!</h2>
      <p className="no-results__text">
        Возврат на главную страницу произойдёт через {counter}...
      </p>
    </div>
  )
}

export default NoResults
