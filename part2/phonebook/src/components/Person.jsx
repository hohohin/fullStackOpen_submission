function Person({contacts}) {
    return contacts.map(contact=><li key={contact.id}>{contact.name} {contact.number}</li>)
}

export default Person