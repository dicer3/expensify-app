import {firebase,google_provider} from '../firebase/firebase';
export const login=(uid)=>
(
  {
    type: 'LOGIN',
    uid
  }
)
export const logout=()=>
({
  type: 'LOGOUT'
})
export const start_login=()=>
{
    return()=>
    {
       return firebase.auth().signInWithPopup(google_provider);
    }
}
export const startlogout=()=>
{
  return()=>
  {
    return firebase.auth().signOut();
  }
};

/*export const startLogin = () => {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    };
  };*/