import { useState } from 'react'
import PropTypes from 'prop-types'; 
import './App.css'

function MyButton({title, count, onClick}) {
  return (
    <button onClick={() => onClick((count) => count + 1)}>
    {title} {count}</button>
  );
}
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <h1>Welcome to my app</h1>
        <MyButton title="I'm a butt" count={count} onClick={setCount}/>
      </div>
  );
}

export default App
