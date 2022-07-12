const course = 'Half Stack application development';
const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'];
const numExercises = [10, 7, 14];

const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Content = ({parts, numExercises}) => {
  return(
    <div>
        <p>
          {parts[0]} {numExercises[0]}
        </p>
        <p>
          {parts[1]} {numExercises[1]}
        </p>
        <p>
          {parts[2]} {numExercises[2]}
        </p>
    </div>
  );

}

const Total = ({numExercises}) => {
  return (
    <div>
      <p>Number of exercises {numExercises[0] + numExercises[1] + numExercises[2]}</p>
    </div>
  );
}


const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} numExercises={numExercises} />
      <Total numExercises={numExercises} />
    </div>
  )
}

export default App;