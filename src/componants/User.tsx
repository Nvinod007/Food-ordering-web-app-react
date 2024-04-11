import React from 'react';
import { useState, useEffect } from 'react';

const User = ({ name, componentType }) => {
  const [count] = useState(0);

  useEffect(() => {
    const timmer = setInterval(() => {
      console.log('i am interval in functional component')
    },1000)
    return () => {
      // This will be called while unmounting the compnent.
      clearInterval(timmer)
    }

  }, [])
  return (
    <div className='user-card'>
      <h1>Name: {name}</h1>
      <h3>Job: software developer</h3>
      <h3>Qualification: BTech</h3>
      <h3>Location: Hyderabad</h3>
      <h3>Contact: vinodkumar.nelanakula@gmail.com</h3>
      <h3>Component type: {componentType}</h3>
      <h6>State Variable Count: {count}</h6>
    </div>
  )
}

export default User;