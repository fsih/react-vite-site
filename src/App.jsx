import { useState } from 'react'
import PropTypes from 'prop-types'; 
import './App.css'

function MyButton({title}) {
  return (
    <button>{title}</button>
  );
}
MyButton.propTypes = {
  title: PropTypes.string.isRequired
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <h1>Welcome to my app</h1>
        <MyButton title="I'm a butt"/>
      </div>
  );
}

export default App
