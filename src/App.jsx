
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/Reuse/NavBar'
import Footer from './components/Reuse/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='h-[1000px]'>
    <NavBar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
