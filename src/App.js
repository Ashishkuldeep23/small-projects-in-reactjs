

import React, {useState} from 'react';

import { Route , Routes  } from "react-router-dom";


// // // All components are ----------> (Imports)
import Header from './All_comp/Header/header';
import App2 from "./All_comp/componant2/app"
import ResturentMain  from './All_comp/Resturent/ResturentMain';
import InDeByUseSate from "./All_comp/IncreDcre/InDeByUseState"
import Toss from "./All_comp/Toss/Toss"
import Keeper from './All_comp/Keeper/Keeper';
import EmojiDetails from './All_comp/emojiDetails/emojiDetails';
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

        <Route path='/' element={ < ResturentMain  darkMode={darkMode} />} />
        <Route path='/keeper' element={ < Keeper />} />
        <Route path='/emoji' element={ < EmojiDetails />} />
        <Route path='/toss' element={ < Toss darkMode={darkMode} />} />
        <Route path='/chat' element={ < InDeByUseSate darkMode={darkMode} />} />
        <Route path='/card' element={ < App2 />} />
        <Route path='/login' element={ < LogIn />} />
        <Route path='/time' element={ < Time />} />
        <Route path='/feedback' element={ < FeedBody />} />
        <Route path="*" element={< ResturentMain  darkMode={darkMode} />}/>
      </Routes>


    </>
  );
}

export default App;
