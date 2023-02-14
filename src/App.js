

import React, {useState} from 'react';

import { Route , Routes  } from "react-router-dom";


// // // All components are ----------> (Imports)
import Header from './All_comp/Header/header';
import App2 from "./All_comp/componant2/app"
import ResturentMain  from './All_comp/Resturent/ResturentMain';
import InDeByUseSate from "./All_comp/IncreDcre/InDeByUseState"
import Toss from "./All_comp/Toss/Toss"
import Keeper from './All_comp/Keeper/Keeper';
import EmojiDetails from './All_comp/emojiDetails/emojiMain';
import LogIn from "./All_comp/LogIn/conditionalMain"
import Time from "./All_comp/Time/TimeMain"
import FeedBody from './All_comp/Feedback/feedBody';



/**
 * Not used components are ---------->
 * 1. Componant 
 * 2. PrecticeAngela
 * 3. IncreDcre (By use Reduser)
 * 
*/







function App() {

  const [darkMode , setDarkMode]=useState(false)

  // console.log(darkMode)

  
  // // // Below fuction is used for making dark mode in custom components (see resturent component)
  // // // useState var value is used in resturent compo , so darkMode have true or false only....
  function makeDarkTrue(value){
    setDarkMode(value)
  }

 



  return (
    <>  

      < Header  makeDarkTrue={makeDarkTrue}  />

      <Routes>

        <Route exact path='/' element={ < ResturentMain  darkMode={darkMode} />} />
        <Route exact path='/emoji' element={ < EmojiDetails />} />
        <Route exact path='/keeper' element={ < Keeper />} />
        <Route exact path='/login' element={ < LogIn />} />
        <Route exact path='/toss' element={ < Toss darkMode={darkMode} />} />
        <Route exact path='/chat' element={ < InDeByUseSate darkMode={darkMode} />} />
        <Route exact path='/card' element={ < App2 />} />
        <Route exact path='/time' element={ < Time />} />
        <Route exact path='/feedback' element={ < FeedBody />} />
        <Route exact path="*" element={< ResturentMain  darkMode={darkMode} />}/>
      </Routes>


    </>
  );
}

export default App;
