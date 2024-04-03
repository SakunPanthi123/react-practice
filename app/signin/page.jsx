'use client'
import {useState} from 'react'
import Link from 'next/link'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='flex justify-center h-full'>
      
        <div className='flex-col mt-60'>
          <p className='mb-2'>
            Username
          </p>
          {/* input box */}
          <input 
          onChange={
            (event)=>{
              setUsername(event.target.value)
            }
          }
          className='border-2 border-black rounded-md p-1'
          type='text'
          />
          <p className='my-2'>
            Password
          </p>
          <input 
          onChange={
            (event) =>{
              setPassword(event.target.value)
            }
          }
          className='border-2 border-black rounded-md p-1'

          type='password'
          />
          <br />
          <Link
          href = {
            `/about/${username}/${password}`
          }
          >
            <button
            className='py-1 px-2 bg-gray-700 rounded-md text-white mt-2'
           
            >
              Submit
            </button>
          </Link>
          <br/>
          {username}
          <br/>
          {password}
        </div>
    </div>
  )
}

export default Signin