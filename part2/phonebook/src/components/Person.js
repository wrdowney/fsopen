const Person = ({removePerson, person}) => {
    return (
        <div>
            <p>{person.name} {person.number}</p>
            <button onClick={(e)=> {
                e.preventDefault();
                removePerson(person);
                }}>remove</button>
        </div>
        
    );
}

export default Person;