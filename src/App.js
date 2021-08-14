import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import DarkMode from './components/DarkMode';
import Home from './pages/Home';


const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('themePreference'));
    if (temp !== undefined && temp !== null) {
      setIsDark(temp);
    } else if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      setIsDark(true)
    }
  }, [])
  
  const toogleMode = () => {
    localStorage.setItem("themePreference", String(!isDark))
    setIsDark(!isDark);
  }

  return (
    <DarkMode.Provider
      value={{
        isDark,
        toogleMode: toogleMode
      }}
    >
      <Router>
        
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/:article" component={Home}/>
        </Switch>
      
      </Router>
    </DarkMode.Provider>
  );
};

export default App;