import React from 'react';
import {connect} from 'react-redux';
import {start_login} from '../actions/auth'
const login=({startlogin})=>
(    <div className="box-layout">      
            <div className="box">
               <h1 className="title">Expensify</h1>
               <p>it's time to get your expense under control</p>   
            <button onClick={startlogin} className="button_style">Login With Google</button>
        </div>
    </div>
)
const map_dispatch_props=(dispatch)=>
(
    {
        startlogin: ()=>dispatch(start_login())
    }
)
export default connect(undefined,map_dispatch_props)(login);