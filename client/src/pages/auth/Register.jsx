import React from 'react'
import pic2 from '../../assets/pic2.jpg';
import Form from '../../components/Shared/Form/Form';


const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
        <img src={pic2} alt="Register image" />
        </div>
        <div className="col-md-4 form-container">
          <Form 
          formTitle={'Register'} 
          submitBtn={'Register'} 
          formType={'register'}/>
        </div>
      </div>
    </>
  )
}

export default Register
