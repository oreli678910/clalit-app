import React, { useState } from 'react';

import './App.css';
import Main from './Components/Layout/Main/Main';
import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Footer from './Components/Layout/Footer/Footer';
import CatList from './Components/Pages/CatList/CatList';

type Theme ='light-mode' | 'dark-mode';
function App() {
  
  
  const [theme,setTheme] = useState<Theme>('light-mode');
  
  const changeTheme = () => {
      if (theme === `light-mode`){
        setTheme(`dark-mode`);
       } else{
          setTheme(`light-mode`);
        }
      }

  
  return (
    <div className={`App ${theme}`}>
      <button onClick={changeTheme}>
      {theme==='light-mode'?<span>🌛</span>:<span>🌞</span>}</button>
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
