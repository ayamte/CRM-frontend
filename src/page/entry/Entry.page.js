import React, {useState} from 'react';

import {Container} from 'react-bootstrap';
import {ResetPassword} from '../../components/password-reset/PasswordReset.comp';
import {LoginForm} from '../../components/login/Login.comp';
import './entry.style.css';


const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = (e) =>{
    const {name, value} = e.target;

    switch(name){
      case 'email':
        setEmail(value);
        break;
        
        case 'password':
          setPassword(value);
          break;

        default:
          break;
    }
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault();

    if(!email || !password){
      return alert("Fill up all the form!");
    }
  };

  const handleOnResetSubmit = (e) =>{
    e.preventDefault();

    if(!email){
      return alert("Please enter the email!");
    }
  };

  const frmSwitcher = (frmType) =>{
    setFrmLoad(frmType);
  }

  return <div className="entry-page bg-info">
    <Container className="p-5 mb-4 bg-light rounded-3 form-box">
      <div className="container-fluid py-5">
        {frmLoad ==='login' && <LoginForm handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        frmSwitcher = {frmSwitcher}
        email={email}
        pass={password}
      
        />}
        

        {frmLoad === 'reset' && <ResetPassword handleOnChange={handleOnChange} 
        handleOnResetSubmit={handleOnResetSubmit}
        frmSwitcher = {frmSwitcher}
        email={email}
        pass={password}
                
        />}
        
      </div>
    </Container>
  </div>
};

export default Entry
