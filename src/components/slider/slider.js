import React, { useState,useEffect, setState  } from 'react';




const Slider = () => {


    const [count, setCount] = useState(0);
    const [Images, setImages] = useState(
        [1, 6, 8, 6, 7, 8, 9,10 ]
    )

    const [test, setTest] = useState(0);

    // useEffect (() => {
    //     let  i_id ;
    //         if( Test = true){
    //             i_id  =  setInterval (() => {
    //                 console.log(1)
    //               setCount ( currCount  => currCount + 1 )
    //            }, 3000 );
    //            return () => {
    //             clearInterval (i_id);
    //          }
    //         }
    // useEffect (() => {
    //     console.log(test)

    // }, [])
      
      
    //  }, []);
    // function handleAlertClick() {
       
       
    //     for(var i = 0; i < 2; i++ ){
      
    //     setTimeout(() => {
    //         console.log(test)
          
    //         useEffect (() => {
    //             console.log(test)
    //             setTest(test + 1)
                
    //         }, [])   
    
    //         }, 1000);
    //     //   alert('You clicked on: ' + );
    //     console.log(test)
    //     }




    //   }
    


    function countDown() { 
        if(count > 0){
            setCount(count - 1)
        } else {
            setCount(Images.length)  
        }
       
        }

      function countUp() { 
        setCount(count + 1)
        
        if(count == Images.length){
            setCount(0)
            }
        }
        
    
return(

    <>
    
    <div>
    <button  onClick={()=> {countDown()}}>Down</button>

    <div>
{count}
    </div>

    <button onClick={()=> {countUp()}}>Up</button>
    <button  >Start</button>
    </div>


    </>
)


}

export default  Slider