import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //Wrapper
    <div className="bg-gray-900 text-white px-100">
      {/*Content*/}
      <div className="min-h-screen bg-gray-500">
      </div>
                  <div className="min-h-screen bg-gray-600"></div>
                  <div className="min-h-screen bg-gray-700"></div>
    </div>
  )
}

export default App
