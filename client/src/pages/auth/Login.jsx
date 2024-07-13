import React from 'react'
import pic1 from '../../assets/pic1.jpg';
import Form from '../../components/Shared/Form/Form';

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src={pic1} alt="Login image" style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-4 form-container">
          <Form 
            formTitle={'Login Page'} 
            submitBtn={'Login'} 
            formType={'login'}
          />

        </div>
      </div>
    </>
  )
}

export default Login
