import React from 'react';
import {NavLink} from 'react-router-dom';
import {startlogout} from '../actions/auth';
import {connect} from 'react-redux';
 const Header=({start_logout})=>
(
    <header>
       <h1>expensify</h1>
       <NavLink to="/" activeClassName="is_active" exact={true}>dashboard</NavLink>
       <NavLink to="/create" activeClassName="is_active">create page</NavLink>
       <button onClick={start_logout}>logout</button>
    </header>
)
const map_dispatch_to_props=(dispatch)=>
({
    start_logout:()=>dispatch(startlogout())
});
export default connect(undefined,map_dispatch_to_props)(Header);