
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Feed from './assets/Feed'
import Navbar from './assets/Navbar'
import Sidebar from './assets/Sidebar'
import Watch from './assets/Watch'



function App() {
  

  return (
    <>
 <Navbar/>
    <Routes>
      
      <Route path='/' element={
        <>
       
         <div className='flex mt-2'>
       <Sidebar/>
      <Feed/>
   </div>
        </>
      } />
      <Route path='/watch' element={
        <>
            <Watch/>
        </>
      } />
    </Routes>
   
  
    
    </>
  )
}

export default App
