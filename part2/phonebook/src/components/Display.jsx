import Person from "./Person"

function Display({searching, contacts}) {
    // const namesToShow = names.filter(name => name.includes(searching))
    const namesToShow = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searching))
    return(
        <div>
            <h1>Numbers</h1>
            {searching
                ? <Person contacts={namesToShow}/>
                : <Person contacts={contacts}/>
            }
        </div>
    )
}

export default Display