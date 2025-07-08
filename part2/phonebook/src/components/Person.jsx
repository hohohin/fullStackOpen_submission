import axios from "axios"

function Person({contacts}) {
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/contacts/${id}`)
      .then(respond=>console.log(respond.data)
      // 1. rerender
      // 2. alert
      )
    }
    return contacts.map(contact=>
        <li key={contact.id}>{contact.name} {contact.number}
            {'   '}<button onClick={()=>handleDelete(contact.id)}>delete</button>
        </li>
    )
}

export default Person