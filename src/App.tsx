import './index.css'
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <>
        <Navbar />
        <div className={'flex pb-20 justify-center items-center text-center h-screen'}>
            <span className={'text-4xl pe-2'}>Coming Soon</span>
            <span className="text-4xl animate-loading-dot-1">.</span>
            <span className="text-4xl animate-loading-dot-2">.</span>
            <span className="text-4xl animate-loading-dot-3">.</span>
        </div>
    </>
  )
}

export default App
