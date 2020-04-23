import React, { useState, useEffect } from 'react'
import "./index.css"
import NewContact from "../newContact";
import Remove from "../Remove";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const loadAgain = async () => {
    console.log("loadAgain")
    try {
      const res = await fetch("http://plato.mrl.ai:8080/contacts", {
        "method": "GET",
        "headers": {
          "api": "richard"
        }
      })
      const data = await res.json()
      setContacts(data.contacts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadAgain()
  }, [])

  return (
    <React.Fragment>
      <NewContact loadAgain={loadAgain} />
      <Remove contacts={contacts} loadAgain={loadAgain} />
    </React.Fragment>
  )
};

export default Contacts;