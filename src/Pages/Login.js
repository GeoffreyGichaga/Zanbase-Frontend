import React, { useContext, useState } from 'react'
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
import { UserContext } from '../custom-hooks/user'


const Login = () => {
  const navigate = useNavigate()

  const [userEmail,setUserEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errors] = useState("")

  const {setUser} = useContext(UserContext)


   
 

  const handleSubmit = (e)=>{

    e.preventDefault()

    // const userInfo = {

    // }

    // console.log({email: userEmail,password:password});

  
    fetch("http://127.0.0.1:3000/login",{
      method: "POST",
      mode: 'cors',
      headers: 
          {

            'Content-Type':'application/json'
          
          },
      body: JSON.stringify({email: userEmail,password:password})
    })
    

    .then((res)=>{

      if(res.ok){
        res.json()
        .then(resJson => {

          // console.log(resJson)

          setUser(resJson)
          setUserEmail("")
          setPassword("")
          localStorage.setItem("jwt", resJson.jwt)

          
          navigate('/dashboard')
          
        })
        
      }else{
        alert("error login")
    }

    })
    
  }
//  console.log(user)
 
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
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}

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

              
          </Form>




        </Col>
      </Row>


    </Container>
    </>
  )
}

export default Login;
