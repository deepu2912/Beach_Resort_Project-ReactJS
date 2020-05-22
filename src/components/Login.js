import React ,{ useState }from 'react'
import Hero from "../components/Hero";
import Home from '../pages/Home';
  
var CryptoJS = require("crypto-js");


function Login() {
 

    const [User,setUserLogin]=useState({Username:'',Password:''});

    function updateuserlogin(e){
        setUserLogin({...User,[e.target.name]:e.target.value});
     
    }

    function authenticateUser(e){
        e.preventDefault();
        var username =  User.Username;
        var Password = User.Password;
        
        var Error = 'Please enter the following details. \n';

        if(username.length === 0){
            Error = Error + "Please enter the username \n";
        }
         if(Password.length === 0){
            Error = Error + "Please enter the password \n";
        }
        
        if(Error === "Please enter the following details. \n"){
            debugger;
            
            var Message = "";

         var bytes = CryptoJS.AES.decrypt(process.env.React_APP_ADMIN_PASSWORD, process.env.REACT_APP_Encrypt_Decrypt_key);
            var Password_Encrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            if(Password_Encrypt === Password
               && username === process.env.React_APP_ADMIN_USERNAME)
            {
                localStorage.setItem('Username', username);
                localStorage.setItem('Password', process.env.React_APP_ADMIN_PASSWORD);
                localStorage.setItem('Redirect', '/');
                Message = "Login Successfull."
               
                window.location.reload(false);
                
              }
            if (username.toLocaleLowerCase() !== process.env.React_APP_ADMIN_USERNAME.toLocaleLowerCase()){
                Message = Message + "Please enter correct username";
            }
            if (Password !== Password_Encrypt){
                Message = Message + "Please enter correct password";
            }
            alert(Message);
             
        }
        else{
            alert(Error);
        }
    }

    if(localStorage.getItem('Username') === process.env.React_APP_ADMIN_USERNAME){
        return <Home></Home>
    }
  

    return (
       <>
       <Hero> 
       <div className="App">
        <h1>Validated Login Form</h1>
        <form onSubmit={authenticateUser}>
          <label htmlFor="Username">User Name / Mobile No</label>
          <input name="Username"  type="text"  placeholder="Enter your User Name / Mobile No" onChange={updateuserlogin} />
          
          <label htmlFor="Password">Password</label>
          <input
            name="Password"
            type="password"
            placeholder="Enter your password" onChange={updateuserlogin} />
          
          <button type="submit" >
            Login
          </button>
        </form>
    </div>
        </Hero>
       </>
    )
}

export default Login
