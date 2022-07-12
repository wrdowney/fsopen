import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    console.log(persons.indexOf(newName));
    if(persons.some(e => e.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    }
    e.preventDefault();
    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject));
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {persons.map((person, i) => {return <p key={i}>{person.name}</p>})}
    </div>
  )
}

export default App