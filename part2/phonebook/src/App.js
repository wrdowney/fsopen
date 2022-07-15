import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
    })
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      })
  }

  const removePerson = (person) => {
    // remove person from phonebook and update state
    if(window.confirm(`Are you sure you want to remove ${person.name} from the phonebook?`)) {
      personService.remove(person.id);
      setPersons(persons.filter(currentPerson => currentPerson.id !== person.id))
    }
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
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <Persons 
        removePerson={removePerson}
        persons={persons} 
        searchQuery={searchQuery} 
      /> 
    </div>
  )
}

export default App