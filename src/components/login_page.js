import React from 'react';
import {connect} from 'react-redux';
import {start_login} from '../actions/auth'
const login=({startlogin})=>
(    <div>
        <button onClick={startlogin}>Login</button>
    </div>
)
const map_dispatch_props=(dispatch)=>
(
    {
        startlogin: ()=>dispatch(start_login())
    }
)
export default connect(undefined,map_dispatch_props)(login);