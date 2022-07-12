const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}


const Part = ({part}) => {
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  );
}

const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
}

const Content = ({parts}) => {
  return(
    <div>
        {parts.map((part, i) => <Part key={i} part={parts[i]} />)}
    </div>
  );

}


const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
    </div>
  )
}

export default App;