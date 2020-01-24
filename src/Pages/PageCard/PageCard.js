import React, {useEffect, useState} from "react";
// ---------------------------------------------
import s from "./PageCard.module.css"
// import '../../css/App.css'
import '../../css/antd.css'
import './radio.css'
import { Carousel } from 'antd';

// ---------------------------------------------
import Contentblock1 from './Block_2_1_content_text'
import { Button, Radio, Timeline  } from 'antd';

const ButtonGroup = Button.Group;

const tureCard = {

id:`1`,
textPrevy:`бла бла бла`,
dayNamber: [1,2,3,4,5,6,7,8,9,10]




,
daylength: `8дней/7ночей`

}

const PageCard = (props) => {

  
    const [size, setSize] = useState(0);
   

    const handleSizeChange = e => {
        setSize(e.target.value );
      };

    const {h5, p} = props;
// -----------------------------------------------
let dayMap = {}
;
// -----------------------------------------------

const listItems = tureCard.dayNamber.map((number) =>

<Radio.Button key={number.toString()}  value={number} >День {number}</Radio.Button>
 
);
function onChange(a, b, c) {
    console.log(a, b, c);
  }

return(
<>
<div className={s.Body_grid}>

            <div className={s.Body_grid_block_1}>
                    <div>
                             <h3>{}</h3>
                     </div>
                    <div>
                        {}
                    </div>
            </div>


    <div  className={s.Body_grid_block_2}>
                <div  className={s.Body_grid_block_2_1}>
                    <Contentblock1 h5="Tom" p="33"/>
                    <Contentblock1 h5="Tom" p="33"/>

                </div>
                <div  className={s.Body_grid_block_2_2}>
              
                <Timeline> 
                    <Timeline.Item>Прибытие в Иркутск, встреча в Аокзале (9:00 – 9:30) с табличкой «Новый год на Байкале!» Знакомство с гидом</Timeline.Item>
                    <Timeline.Item>Обзорная экск гт</Timeline.Item>
                    <Timeline.Item>Обзорная экск гт</Timeline.Item>

                   
                </Timeline>
                </div>
                <div  className={s.Body_grid_block_2_3}>

      
                        <Radio.Group value={size} onChange={handleSizeChange}>  
                        {listItems}  
                      
                       

                        </Radio.Group>
                </div>
       
    
    </div>


</div>



</>

)



}

export default PageCard