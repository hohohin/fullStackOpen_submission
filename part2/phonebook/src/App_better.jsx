import { useState } from 'react'
import Form_better from './components/Form_better'
import Display from './components/Display'
import Filter from './components/Filter'

function App_better() {
  const [searching,setSearch] = useState('')
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [contacts, setContact] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const handleSearch = (event) => {
    const searching = event.target.value
    setSearch(searching)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const nameExists = contacts.some(contact => contact.name === newPerson.name)

    if (nameExists) {
      alert(`${newPerson.name} is already added to phonebook`)
      return
    }

    const newContact = {
      id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
      name: newPerson.name,
      number: newPerson.number
    }
    setContact(contacts.concat(newContact))
    setNewPerson({ name: '', number: '' })
  }

  const handlePersonChange = (event) => {
    const { name, value } = event.target
    setNewPerson({ ...newPerson, [name]: value })
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <Filter searching={searching} handleSearch={handleSearch}/>
      <h2>add contact</h2>
      <Form_better 
        person={newPerson}
        onPersonChange={handlePersonChange}
        onAdd={handleAdd}
      />
      <Display searching={searching} contacts={contacts}/>
    </div>
  )
}

export default App_better 