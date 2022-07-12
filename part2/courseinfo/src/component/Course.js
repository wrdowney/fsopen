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
        {console.log(course)}
        <h1>{course.name}</h1>
    </div>
    );
}
  
  const Total = (props) => {
    let parts = props.parts.parts;
    return (
      <div>
        {/* sums all exercises */}
        <p>Total number of exercises: {parts.reduce((prev,curr) => {return prev + curr.exercises;}, 0)}</p>
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

const Course = ({course}) => {
    return (
        <div>
          <Header course={course} />
          <Content parts={course.parts}/>
          <Total parts={course} />
        </div>
      )
}

export default Course;
  