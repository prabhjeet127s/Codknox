import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

function App() {
  const API = "fdbe6157";
  const [search, setsearch] = useState("")


  const fetchdata = async () => {
    try {
      const res = await axios.get("https://www.omdbapi.com/", {
        params:
        {
          apikey: API,
          s: search,
        },
      });

      return res.data


    } catch (error) {
      console.log(error);
    }
  }




  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", search],
    queryFn: fetchdata,
    enabled: !!search


  });


  if (error) return <h2>Error loading users</h2>;


  console.log(data)






  return (
    <>
      <div className=' bg-blue-400   min-h-screen max-h-max  w-screen flex flex-col   ' >
        <div className='  pt-11  flex flex-col items-center justify-center' >
          <h3 className='text-7xl pb-10  font-bold text-white'  >     Movie Station</h3>
          <input placeholder='search movie' type="text" className='border-2  rounded-2xl w-4xl  bg-white p-3  border-amber-950' onChange={(e) => setsearch(e.target.value)} />
        </div>
        {isLoading && <h3 className='text-8xl  text-center p-4' >Loading...</h3>}

        <div className='gap-4 flex m-20 bg-gray-50   flex-wrap   mx-52'>

      

          {data?.Search?.map((e) => (
            <div className=' w-[280px] h-[400px] m-2 mt-4  overflow-hidden object-fill ' key={e.imdbID} >

              <img src={e.Poster} />
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default App
