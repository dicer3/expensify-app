import {firebase,google_provider} from '../firebase/firebase';
const start_login=()=>
{
    return()=>
    {
       return firebase.auth().signInWithPopup(google_provider);
    }
}
export default start_login;

/*export const startLogin = () => {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    };
  };*/