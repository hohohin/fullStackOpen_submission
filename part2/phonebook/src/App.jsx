import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  return(
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Display />
    </div>
  )
}

export default App
