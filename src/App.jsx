import React from 'react'
import { Button, Typography } from '@mui/material'
import './App.css'

function App() {
  
  React.useEffect(() => {
    console.log("Hi from app");
  }, [])

  return (
    <div className="App">
      <Typography variant='h1'>Mui React</Typography>
      <Button variant='contained'>Button</Button>
      <Button variant='contained' color='success'>Button</Button>
      <Button variant='contained' color='error'>Button</Button>
    </div>
  )
}

export default App
