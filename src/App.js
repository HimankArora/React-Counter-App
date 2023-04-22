import { useState } from 'react';
import './App.css';

function App () {
  const [counter, setCounter] = useState( 0 )
  function update () {
    document.getElementById( "btn" ).innerText = counter + 1
  }
  return (
    <div className="App">
      <p>Click Me: </p>
      <button onClick={ () => {
        setCounter( counter + 1 )
      } }>{ counter }</button>
    </div>
  );
}

export default App;
