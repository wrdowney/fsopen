import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
       name: 'Arto Hellas',
       number: '040-1234567',
    }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery={searchQuery} handleChangeQuery={handleChangeQuery} />
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <Persons persons={persons} searchQuery={searchQuery} /> 
    </div>
  )
}

export default App