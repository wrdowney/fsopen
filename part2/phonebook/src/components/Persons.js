import Person from './Person';

const Persons = ({removePerson, persons, searchQuery}) => {
    return (
        <div>
            {console.log(persons)}
            {}
            {persons.map((person, i) => {        
            if(person.name.includes(searchQuery)) return <Person removePerson={removePerson} person={person} key={i} />
            return null;
            })}
        </div>
        
    );
}

export default Persons