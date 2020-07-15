import React from 'react';

import './App.css';

const App = () => {
  
  const APP_ID = 'af3feda2'
  const APP_KEY = '365f22c218287bd118bc726a86c08651'
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`



  return(
    <div className="App">
      <h1>hello React</h1>
    </div>
  )
}

export default App;
