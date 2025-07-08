import axios from "axios"
import { useState } from "react"

function Person({contacts, handleDelete}) {

    // 1. rerender
    // 2. alert
    return contacts.map(contact=>
        <li key={contact.id}>{contact.name} {contact.number}
            {'   '}<button onClick={()=>handleDelete(contact.id)}>delete</button>
        </li>
    )
}

export default Person