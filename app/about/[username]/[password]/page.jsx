import React from 'react'

const About = ({params}) => {
  const username = params.username
  const password = params.password
  return (
    <div>
      {username}
      <br/>
      {password}
    </div>
  )
}

export default About