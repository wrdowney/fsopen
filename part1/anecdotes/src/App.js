import { useState } from 'react'

const Button  = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
   
  const [selected, setSelected] = useState(0);

  const [maxVotes, setMaxVotes] = useState(0);

  return (
    <div>
      <p>{anecdotes[selected]} votes: {votes[selected]}</p>
      <div>
        <Button text='next anecdote' onClick={() => {
          setSelected(Math.floor(Math.random() * anecdotes.length));
        }} />
        <Button text='vote' onClick={() => {
          if(votes[selected] > votes[maxVotes]) {
            setMaxVotes(selected);
          }
          const copyVotes = {...votes};
          copyVotes[selected]++;
          setVotes(copyVotes);
        }} />
      </div>  
      <p>Anecdote with the most votes</p>
      <p>{anecdotes[maxVotes]}</p>
      
    </div>
    
  )
}

export default App