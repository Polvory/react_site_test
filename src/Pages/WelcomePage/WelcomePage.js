import React, {useEffect} from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
// Style----------------------------------------
import s from "./WelcomPage.module.css"
// ----------------------------------------------


const WelcomPage = () => {


return (

<>
<div className={s.WelcomPage_ParentGrid}>
    
    <div className={s.WelcomPage_ParentGrid__content}>
       < h1>Hi User</h1>
       <Link to='/BattlePage'> <Button type="primary" size={1}>
          Start
        </Button></Link>
        </div>




</div>
</>


)


}

export default WelcomPage