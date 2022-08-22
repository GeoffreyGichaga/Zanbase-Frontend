import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import circlemgt from '../Assets/circlemgt.png'
import '../Styling/signup.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import email from '../Assets/email.png'
import padlock from '../Assets/padlock.png'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Components/UserContext'

const Login = () => {
  const navigate = useNavigate()

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState("")

  const [currentUser,setCurrentUser] = useState(UserContext)


  const handleSubmit = (e)=>{

    e.preventDefault()

  
    fetch("https://zanbase-backend.herokuapp.com/login",{
      method: "POST",
      mode: 'no-cors',
      cache: 'no-cache',
      headers: 
          {
            'Content-Type':'application/json'
          
          },
      body: JSON.stringify(username,password)
    })
    .then((resJson) => resJson.json())

    .then((res) => {
      if(res.status === "created"){
        setCurrentUser(res.summary)
        navigate('/dashboard')
        console.log(currentUser);
      }
        else{
          res.json().then( err => setErrors(Object.entries(err.error)))  
        }
      }
    )
    
  }


  return (
    <>
    <Container fluid className='mt-5'>
      <Row className='mt-5'>
        <Col sm={12} md={6} lg={6} className='mt-5'>
          <img className='w-50' src={circlemgt} alt='team'/>
        </Col>




      {/* Signup Form  */}
        <Col sm={12} md={6} lg={6} className='mt-5'>
          <h3 className='signup-title'>Login</h3>
          <p>{errors}</p>
          <Form>

            



            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text id="usernameinput">
                    <img className='inputlogo' src={email} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                  className='inputspace'
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="usernameinput"
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}

                />
              </InputGroup>

            

              <Form.Text muted className='orgtext d-flex justify-content-start'>
                @zanaafrica.org or @zanaafrica.com
              </Form.Text>


            
        
            </Row>



            <Row className="mb-3 mt-5">
              <InputGroup as={Col} className=" mb-3">
                  <InputGroup.Text id="passwordinput">
                    <img className='inputlogo' src={padlock} alt={"userimg"}/>
                  </InputGroup.Text>

                <Form.Control
                  className='inputspace'
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="passwordinput"
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>


              
              

            </Row>



            
            

              <Button onClick={handleSubmit} id='submitbtn' variant="primary" type="submit">
                Submit
              </Button>

              <div className='mt-3'>
                <p className='logintext'>Not Yet Registered? <a className='alink' href='/signup'>Signup</a></p>
              </div>
          </Form>




        </Col>
      </Row>


    </Container>
    </>
  )
}

export default Login;
