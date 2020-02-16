import React from 'react'
import useCounter from '../hooks/useCounter'

const Pagination = () => {

    const { count, increment, decrement } = useCounter({initialCount: 1})

    return (
        <div>
            Current page { count }
            <button onClick={ ()=> decrement(1, 1) }>previous page</button>
            <button onClick={ ()=> increment(1, 10) }>next page</button>
        </div>
    )
}

export default Pagination