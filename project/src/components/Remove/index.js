
import React from "react";

const RemoveContact = ({ contacts, loadAgain }) => {
  
  const contactDelete = async (person) => {
    console.log("contactDelete")
    const contactIndex = contacts
      .findIndex(contact => {
        return contact.name === person.name && contact.number === person.number;
      });
    try {
      await window.fetch("http://plato.mrl.ai:8080/contacts/remove", {
        method: "POST",
        headers: {
          api: "richard",
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          position: contactIndex
        })
      })
      loadAgain()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="contacts">
      {contacts.map((contact, index) => (
        <div key={index}>
          <table>
            <tbody>
              <tr className="border_bottom">
                <td className="colored">Name:</td>
                <td>{contact.name}</td>
                <td className="colored">Number:</td>
                <td>{contact.number}</td>
                <td>
                  <button onClick={() => contactDelete(contact)} className="delete">x</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default RemoveContact;