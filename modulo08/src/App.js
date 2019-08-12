import React, { useState } from 'react';

function App() {

  const [ techs, setTechs ] = useState([
    'ReactJS',
    'React Native'
  ])

  const [ newTech, setNewTech ] = useState('')

  return (
    <>
      <ul>
      {techs.map( tech => (
        <li>{tech}</li>
      ))}
      </ul>
      <input type="button" value={newTech} onChange={(e) => setNewTech(e.target.value)} />
    </>
  );
}

export default App;
