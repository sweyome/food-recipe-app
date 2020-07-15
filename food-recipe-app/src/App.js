import React from 'react';

import './App.css';

const App = () => {

  const APP_ID = process.env.APP_ID
  const APP_KEY = process.env.APP_KEY
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`



  return(
    <div className="App">
      <h1>hello React</h1>
    </div>
  )
}

export default App;
