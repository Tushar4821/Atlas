import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    console.log(error);
    
    return (
    <div>
        {error && <p>{error.data}</p>}
        <NavLink to='/'> <button>go Home</button></NavLink>
    </div>
  )
}

export default Error