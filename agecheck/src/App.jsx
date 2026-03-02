import { useState } from 'react'


function App() {
  const [age, setage] = useState([]);

  const agecheck=()=>{
    
    age.filter(age=>age>0);


    




  }




  return (
    <><div className='flex  flex-col justify-center items-center w-full  h-screen bg-blue-100'>
      <div className=' flex   gap-3.5'>
        <h1 className='text-2xl'>enter your age :</h1>


        <input className='  w-l h-8 bg-indigo-400' type="text" value={age} onChange={(e) => setage(e.target.value)} />
      </div>

      <div className=' '>

      <p>{age}</p>
      </div>

    </div>


    </>
  )
}

export default App
