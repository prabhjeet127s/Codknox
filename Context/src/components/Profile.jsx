import React, { useState } from 'react'

const Profile = () => {

    const [username,setUsername]=useState("")
    const [password,setPassword]= useState("")





  return (
    <div>


        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button>Sumbit</button>



      
    </div>
  )
}

export default Profile
