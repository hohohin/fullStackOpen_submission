import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Display from './components/Display'
import Filter from './components/Filter'

const baseUrl = 'http://localhost:3001/contacts'

function App() {
  const [searching,setSearch] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [numberInput,setNumberInput] = useState('')
  const [contacts, setContact] = useState([])
  
  const [change,setChange] = useState(true)

  useEffect(()=>{
    axios.get(baseUrl)
    .then(response=>{
      setContact(response.data)
    })
  },[])

  const handleSearch = (event) => {
    const searching = event.target.value
    setSearch(searching)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const newContact = {
      // id: (contacts.length + 1).toString(),
      name: nameInput,
      number: numberInput
    }
    // setContact(contacts.concat(newContact))

    axios.post(baseUrl, newContact)
    .then(response=>{
      alert(`${response.data.name} added!`)
      setContact(contacts.concat(response.data))
      // console.log(response.data);
    })

    setNameInput('')
    setNumberInput('')
  }

  const handleDelete = (id) => {
    const ptd = contacts.filter(contact=>contact.id === id)
    if (window.confirm(`delete ${ptd[0].name}?`)){
    axios.delete(`${baseUrl}/${id}`)
    .then(respond=>{
      // console.log(respond.data)
      setContact(contacts.filter(contact=>contact.id != respond.data.id))
      alert(`${respond.data.name} is deleted`)
      }
    )}
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNameInput(event.target.value)
  }

  const handleNumber = (event) => {
    setNumberInput(event.target.value)
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <Filter searching={searching} handleSearch={handleSearch}/>
      <h2>add contact</h2>
      <Form 
        nameInput={nameInput} 
        numberInput={numberInput}
        handleName={handleName}
        handleNumber={handleNumber} 
        handleAdd={handleAdd}/>
      <Display
        searching={searching}
        contacts={contacts}
        handleDelete={handleDelete} />
    </div>
  )
}

export default App
