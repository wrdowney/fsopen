import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('something happened bruh')

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
    }
    
    const matchingName = persons.find(checkName => checkName.name === newName )

    if(matchingName !== undefined) {
      if(window.confirm(`${newName} is alread added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(matchingName.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => {
              if(person.id === matchingName.id) return newPerson;
              else return person;
            }))
          })
        
      }
    }
    else {
      personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
      })
    }

  }

  const removePerson = (person) => {
    // remove person from phonebook and update state
    if(window.confirm(`Are you sure you want to remove ${person.name} from the phonebook?`)) {
      personService.remove(person.id);
      setPersons(persons.filter(currentPerson => currentPerson.id !== person.id));
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