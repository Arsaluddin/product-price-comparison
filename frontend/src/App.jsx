import Card from './Card'
import Search from './Search'
import { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  
const [data,setData] = useState()



  return (
    <>
      <div className='app'>
        <Search/>
        
      </div>
    </>
  )
}

export default App
