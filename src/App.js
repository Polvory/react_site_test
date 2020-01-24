import React, {useRef, useEffect} from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import "./kursor.css"
// import "./Redux/main"
// import kursor from "kursor"
// Style----------------------------------------
// import s from "./WelcomPage.module.css"
// ----------------------------------------------
// Pages-----------------------------------------------
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import BattlePage from './Pages/BattlePage/BattlePage'
import Loading from './Pages/Loading/Loading'

// ------------------------------------------------------------



function App() {



  // let kursor2 = useRef(null);
 
 
 



 
  // let circleRed = useRef(null);

useEffect(() => {
  // console.log(kursor2)
//   new kursor({
//     type: 4
    
// })




},[]);


 
  return (
    <>
  <Loading/>
  <main>
  <Switch>
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/BattlePage' component={BattlePage}/>
      {/* <Route path='/BattlePage' component={BattlePage}/> */}
  </Switch>

  </main>
   
 
   </>
  );
}

export default App;
