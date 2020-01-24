import {ACTION_CHANGE_FERST_NAME, ACTION_CHANGE_SECOND_NAME} from "../index"




const initialState = {
    FerstName: "Pol",
    SecondName: "Petrov"
};

export const rootReducer =(state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_CHANGE_FERST_NAME:
            return {...state, FerstName: action.payload};
    }
         
     switch (action.type) {
          case ACTION_CHANGE_SECOND_NAME:
           
            return {...state, SecondName: action.payload};
    }    
    

return state;

};