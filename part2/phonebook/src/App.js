import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
       name: 'Arto Hellas',
       number: '040-1234567',
    }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (e) => {
    console.log(persons.indexOf(newName));
    if(persons.some(e => e.name === newName)) {
      alert(`${newName} is already in the phonebook`);
      return;
    }
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(personObject));
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {persons.map((person, i) => {return <p key={i}>{person.name} {person.number}</p>})}
    </div>
  )
}

export default App