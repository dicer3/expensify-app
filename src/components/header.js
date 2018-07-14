import React from 'react';
import {Link} from 'react-router-dom';
import {startlogout} from '../actions/auth';
import {connect} from 'react-redux';
 const Header=({start_logout})=>
(
    <header className="header_style">
      <div className="content-container" >
        <div className="header_content">
          <Link className="header_title" to="/dashboard" >
                <h1>Expensify</h1>
          </Link>
          <button className="button_style button-link" onClick={start_logout}>logout</button>
         </div> 
       </div>
    </header>
)
const map_dispatch_to_props=(dispatch)=>
({
    start_logout:()=>dispatch(startlogout())
});
export default connect(undefined,map_dispatch_to_props)(Header);