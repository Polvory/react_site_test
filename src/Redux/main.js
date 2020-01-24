













// получть текущие состояние
console.log(store.getState());



const changeName = {
    type:'CHANGE_NAME',
    payload: 'Ivan'
}

const changeSecondName = {

type:'CHANGE_SECOND_NAME',
payload: 'Ivan'

};
store.dispatch(changeName);



console.log(store.getState());

store.dispatch(changeSecondName);
console.log(store.getState());