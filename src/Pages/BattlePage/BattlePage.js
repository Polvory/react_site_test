import React from 'react';
import { Button } from 'antd';
import {createStore} from 'redux'
import { connect, Provider } from 'react-redux'
// Style----------------------------------------
// import s from "./BattlePage.module.css"
// ----------------------------------------------



// Исходное стотояние--------------------------


const initialState = {
    ferstName: ``,
    secondName: ``
}




// Создаем редюсер-------------------------

const rootRudecer = (state = initialState, action) => {
return state;
}

// ----------------------------------------------
const store = createStore(rootRudecer);
console.log(store.getState());

// обернутый галвный компонент
// const WrapperMainComponent = connect()(BattlePage);



// ----------------------
// Записывает данные из стэйта в пропс
const mapStateToProps = (state) => {
return {
    ferstName: state.ferstName,
    secondName: state.secondName
};
};
// ----------------------


const BattlePage = () => {


return (
<>

{/*  */}
{/* <Provider s={store}> */}

<h3>Баттл</h3>


<div><input type="text" placeholder="ferstName"/></div>
<div><input type="text"  placeholder="secondName"/></div>

<h2></h2>
<Button type="primary" size={1}>
         Redux
        </Button>
        {/* </Provider> */}
</>
// 

)


}

export default BattlePage


// ReactDOM.render(  <BattlePage/>, document.getElementById('root'));