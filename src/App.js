import React from "react"
import ContactCard from "./components/ContactCard"
import contacts from "./components/contactsData"

import "./App.css"

function App() {
    const Contacts = contacts.map(contact => <ContactCard key={contact.id} name={contact.name} imgUrl={contact.imgUrl} phone={contact.phone} email={contact.email} />)
    return (
        <div className="contacts">
          {Contacts}
        </div>
    )
}

export default App
