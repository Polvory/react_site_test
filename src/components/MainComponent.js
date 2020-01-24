import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {changeFerstName , changeSecondName} from "../store/actions";
class MainComponent extends React.Component {


render() {
const {FerstName, SecondName, changeFerstName, changeSecondName} = this.props;






return (
    <>
<div>
<input 
 
    type="text"
    value={FerstName}
    placeholder="First Name"
    onChange={(event) => {
        changeFerstName(event.target.value);
    }}

/>


</div>
<div>
<input 
 
    type="text"
    value={SecondName}
    placeholder="Second Name"
    onChange={(event) => {
        changeSecondName(event.target.value);
    }}

/>


</div>

<div>

{`${FerstName} ${SecondName}`}

</div>
</>

)





}  




}
const putStateToProps = (state) =>{
    return {
    
        FerstName: state.FerstName,
        SecondName: state.SecondName
    }
    
    }
    
    
    
    
    
    const putActionsToProps = (dispatch) => {
        return {
            changeFerstName: bindActionCreators(changeFerstName, dispatch),
            changeSecondName: bindActionCreators(changeSecondName, dispatch)
        };
    };


export default connect(putStateToProps, putActionsToProps)(MainComponent) ;