import {ACTION_CHANGE_FERST_NAME, ACTION_CHANGE_SECOND_NAME} from "../index.js"








export const changeFerstName = (newFerstName) => {
    return {

        type: ACTION_CHANGE_FERST_NAME,
        payload: newFerstName
    }
        

    
   
};


export const changeSecondName = (newSecondName) => {
    return {

        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    }
};