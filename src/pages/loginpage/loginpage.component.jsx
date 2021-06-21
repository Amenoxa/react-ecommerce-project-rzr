import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/sign-up.component';
import './loginpage.styles.scss';

const LogInPage = () => (
    <div className='loginpage'>
        <SignIn />
        <SignUp />
    </div>
);
export default LogInPage;