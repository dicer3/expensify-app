/*import React from 'react';
import { connect } from 'react-redux';
import {Route,Redirect,Link} from 'react-router-dom';

 const private_route=({is_authenticated,component:Component1,...rest})=>
(
  <Route {...rest} component={(props)=>
   (is_authenticated?(<Component1 {...props} />):(<Redirect to="/" />))}/>
)
const map_state_props=(state)=>
(
  {
        is_authenticated: !!state.auth.uid,
  }
)
export default connect(map_state_props)(private_route);*/


import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {history} from './approuter.js';
import Login from '../components/login_page';
import Header from '../components/header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
        <Header />          
          <Component {...props} />
        </div>
      ) : (
          <Login {...props}/>
        )
    )} />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);