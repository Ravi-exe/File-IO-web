
import './App.css'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="w-[100%] h-[100dvh] m-[1%]">
        <Outlet />
    </div>
  )
}

export default App
