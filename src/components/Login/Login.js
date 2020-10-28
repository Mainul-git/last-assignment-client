import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import image from '../../images/logos/logo.png'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;
            const signedInUser = {name: displayName, email,img:photoURL} 
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
    <div>
        <img src={image} style={{height:'100px',marginLeft:'550px'}} alt=""/>
        <div className="mt-5 login-header" style={{margin:'0 auto',height:'400px',width:'400px',border:'1px solid grey'}}>
            <h1 className=" "style={{}} > Login with</h1>
            <p className="login"onClick={handleGoogleSignIn}><span><img src="https://img.icons8.com/color/48/000000/google-logo.png"/></span>Continue With Google </p>
            <h5 className="mt-3 ml-3">Don't have an account.<u style={{color:'cyan'}}>Create an account</u></h5>
            </div>
        </div>
        
        
    );
};

export default Login;