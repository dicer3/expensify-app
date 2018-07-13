
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Expense_Dashboard_Page from '../components/dashboard';
import Header from '../components/header';
const public_route=({is_authenciated,component:Component1,...rest})=>
(  
    <Route {...rest} component={(props)=>(is_authenciated?
        (   <div>
                < Header />
                < Expense_Dashboard_Page {...props}/>
            </div>
        )    
        :(< Component1 {...props} />)
    )}
     />

    
)
const map_state_props=(state)=>
(
    {
     is_authenciated: !!state.auth.uid,
    }
)
export default connect(map_state_props)(public_route);