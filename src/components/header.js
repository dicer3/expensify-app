import React from 'react';
import {NavLink} from 'react-router-dom';
const Header=()=>
(
    <header>
       <h1>expensify</h1>
       <NavLink to="/" activeClassName="is_active" exact={true}>dashboard</NavLink>
       <NavLink to="/create" activeClassName="is_active">create page</NavLink>
       
    </header>
)
export default Header;