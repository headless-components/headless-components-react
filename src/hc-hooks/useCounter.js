import {useState} from 'react'
import PropTypes from 'prop-types'

const useCounter = ({initialCount}) => {

  const [count, setCount] = useState(initialCount || 0)

  const increment = (value, limit) => {
      if(limit) {
          return count < limit ? setCount(count + value) : count
      }
      setCount(count + value)
  }

  const decrement = (value, limit) => {
      if (limit) {
          return count > limit ? setCount(count - value) : limit
      }
      setCount(count - value)
  }

  return ({
      count,
      increment,
      decrement
  })
}

useCounter.propTypes = {
    initialCount: PropTypes.number
}

export default useCounter