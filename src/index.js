import React, { Suspense} from 'react';
import ReactDOM from'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import ClassToggle from './ClassToggle'
// import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux'
import {createStore} from 'redux';
import {rootReducer} from "./store/reducers"
import MainComponent from './components/MainComponent'
import Slider from './components/slider/slider';
import GetWiidth from './components/getwidth/Getwidth';
import PageCard from './Pages/PageCard/PageCard'



export const ACTION_CHANGE_FERST_NAME = 'ACTION_CHANGE_FERST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const store = createStore(rootReducer);










ReactDOM.render(  

    <Suspense fallback={<div>Загрузка...</div>}>
    <Provider store={store}>
    {/* <BrowserRouter> */}
    {/* <Slider/> */}
    <PageCard/>
    {/* <MainComponent /> */}
    {/* </BrowserRouter> */}

     </Provider>
     {/* <GetWiidth/> */}
     </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
