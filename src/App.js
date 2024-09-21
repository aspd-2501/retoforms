//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [validationStates, setValidationStates] = useState({emailState: true, passwordState: true})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    validatePasswordState();
  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = (() => { 
    console.log(formValues);
    validationStates.emailState ? alert("Formulario enviado") : alert("Su nombre de usuario o contrase;a son incorrectos");
  });

  const validateEmailState = (() => {
    formValues.email.includes("@") && formValues.email.includes(".") && formValues.email.length > 0 ? setValidationStates({...validationStates, emailState: true}) : setValidationStates({...validationStates, emailState: false})
  })

  const validatePasswordState = (() => {
    formValues.password.length >= 6 && formValues.password.match(/[0-9]/) && formValues.password.match(/[a-zA-Z]/) ? setValidationStates({...validationStates, passwordState: true}) : setValidationStates({...validationStates, passwordState: false})
  })

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={!validationStates.emailState}/>
          { !validationStates.emailState && <Form.Text className="text-muted"> Please enter a valid email</Form.Text> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordState}/>
          { !validationStates.passwordState && <Form.Text className="text-muted"> Your password should be have numbers and letters and should be at least 6 characters long</Form.Text> }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
