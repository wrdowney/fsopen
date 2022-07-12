import Person from './Person';

const Persons = ({persons, searchQuery}) => {
    return (
        <div>
            {console.log(persons)}
            {persons.map((person, i) => {
            if(person.name.includes(searchQuery)) return <Person person={person} key={i} />
            return null;
            })}
        </div>
        
    );
}

export default Persons