
import React from 'react';
import "./GetWidth.css"








class GetWiidth extends React.Component {






componentDidMount() {
    setTimeout(function(){ console.log("1")}, 500);
    window.addEventListener("resize", this.handleResize);
    // this.state.widthtest = window.outerWidth
    this.setState({
        widthtest: window.outerWidth
      });
      console.log(this.state.widthtest)
    
  
}

componentWillUnmount() {
  

    window.addEventListener("resize", null);
  }
  handleResize(WindowSize, event) {
      this.setState({WindowSize: window.outerWidth})
      if(this.state.WindowSize < 1000 ){
        console.log("s")
        this.setState({
          showMe:false
        })
    }else if (this.state.WindowSize > 1001 ) {
      console.log("m") 
      this.setState({
        showMe:true
      })
    }
  }

componentDidUpdate(prevProps) {

   
    
    
 

}
constructor(props) {
    super(props);

    this.state = {
        WindowSize : window.outerWidth,
        showMe : true,
        widthtest:window.outerWidth
      }
      this.handleResize = this.handleResize.bind(this);
  }









  // operation(){ 
  
  //   this.setState({
  //     showMe:false
  //   })
  // }
















    render() {
      return (

        <>
        
       
        <div class="green" 
        style={{height:this.state.widthtest - 1000}}
        >
          <h1 >Hello, world!</h1>
        <div>
          { this.state.showMe?`<h3>Please hide me</h3>` : `<h3>Иначе<h3/> `
          }
        </div> 

          
          <button >Click me</button>
          <h2>{this.state.widthtest}</h2>
      <h2>{this.state.WindowSize}</h2>
        </div>
    </>
      )
  }

}
  export default GetWiidth