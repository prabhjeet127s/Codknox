
import './App.css'
import UserContext from './Context/UserContext'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContext>

      <Profile/>
      

      
      


      
    </UserContext>
  )
}

export default App
