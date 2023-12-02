
import './App.css'
import data from "./../public/public.json"
import { useEffect, useState } from 'react'

function App() {
  const [course, setCourse] = useState([])

  useEffect(()=>{
    fetch ('public.json')
    .then(res=>res.json())
    .then(data=>setCourse(data))
  },[])
console.log(data)
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
