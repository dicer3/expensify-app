//higher order component(HOC)-a component(HOC) that renders another component
//reuse
//render hijacking
//prop manipulation
import React from 'react';
import ReactDOM from 'react-dom';
 const Info=(props)=>
 (
     <div>
         <h1>info</h1>
         <p>the info is: {props.info}</p>
     </div>
 );
const with_admin_warning=(Wrappercomponent )=>
{
    return(props)=>(
        <div>
           <p>{props.info}</p>
          {props.is_admin && <p>this is private info please don't share</p>}
           <Wrappercomponent {...props}/>
        </div>   
    )

}
const with_admin_info=(Wrappercomponent2)=>
{
    return(props)=>(
        <div>
            <p>this is your info</p>
            {props.is_authenicied ? <Wrappercomponent2 {...props} /> : "plz login"}
        </div>
    )
}
const AuthInfo=with_admin_info(Info);
const Admin_info=with_admin_warning(Info);
 //ReactDOM.render(<Admin_info is_admin={false} info="there are the details" />,document.getElementById('app'));
 ReactDOM.render(<AuthInfo is_authenicied={true} info="there are the details" />,document.getElementById('app'));