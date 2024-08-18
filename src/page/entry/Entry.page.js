import React, {useState} from 'react';

import {Container} from 'react-bootstrap';
import {ResetPassword} from '../../components/password-reset/PasswordReset.comp';
import {LoginForm} from '../../components/login/Login.comp';
import './entry.style.css';


const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");



  const handleOnResetSubmit = (e) =>{
    e.preventDefault();

  };

  const frmSwitcher = (frmType) =>{
    setFrmLoad(frmType);
  }

  return <div className="entry-page bg-info">
    <Container className="p-5 mb-4 bg-light rounded-3 form-box">
      <div className="container-fluid py-5">
        {frmLoad ==='login' && <LoginForm 
        frmSwitcher = {frmSwitcher}
      
        />}
        

        {frmLoad === 'reset' && <ResetPassword
        // handleOnChange={handleOnChange} 
        handleOnResetSubmit={handleOnResetSubmit}
        frmSwitcher = {frmSwitcher}
        // email={email}
                
        />}
        
      </div>
    </Container>
  </div>
};

export default Entry
