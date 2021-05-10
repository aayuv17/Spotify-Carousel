import React from "react";
import './signUp.css'
import './signUp.scss'
import {Form} from 'react-bootstrap'

function SignUp() {
  return (
  <div className="parent">
  <Form className="Form">
  <center><h2>SIGN UP</h2></center>
  <Form.Group controlId="formGroupEmail">
    <Form.Label className="labels pos">Username</Form.Label>
    <Form.Control className="box" type="text" placeholder="Enter Username" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label className="labels">Email address</Form.Label>
    <Form.Control className="box" type="email" placeholder="Enter email" />
  </Form.Group>
  
  <Form.Group controlId="formGroupPassword">
    <Form.Label className="labels pos">Password</Form.Label>
    <Form.Control className="box" type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formGroupConfirmPassword">
    <Form.Label className="labels">Confirm Password</Form.Label>
    <Form.Control className="box" type="password" placeholder="Confirm password" />
  </Form.Group>
  <p className="text-muted text">Already have an account yet? <a className="link">Sign In</a></p>
  <button className="btns">Sign Up</button>
  
</Form>

</div>
  );
}
 export default SignUp;