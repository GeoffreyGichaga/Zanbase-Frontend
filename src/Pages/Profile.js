import React from 'react'
import Container from 'react-bootstrap/Container'
import SidePanel from '../Components/SidePanel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import '../Styling/Profile.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import userimg from '../Assets/user.png'
import { UserContext } from '../custom-hooks/user'
import { useContext } from 'react'

// icons 
import bank from '../Assets/bankbuilding.png'
import account from  '../Assets/calculator.png'
import binarycode from '../Assets/binarycode.png'
import office from '../Assets/office.png'
import telephone from '../Assets/telephone.png'
import number from '../Assets/number.png'


const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)

    
    const [name_on_account ,setNameOnAccount] = useState("")
    const [bank_name,setBankName] = useState("")
    const [account_number,setAccountNumber]=useState("")
    const [bank_code,setBankCode] = useState("")
    const [branch_code,setBranchcode] = useState("")
    const [telephone_number,setTelephoneNumber] = useState("")
    const token = localStorage.getItem("jwt")
    const [id_number,setIdNumber] = useState("")

   

    
    const handleSubmit = (e)=> {
        e.preventDefault()

        const profileDetails = {
            user_id: user.id,
            name_on_account: name_on_account,
            bank_name: bank_name,
            account_number:account_number,
            bank_code: bank_code,
            branch_code: branch_code,
            telephone_number: telephone_number,
            id_number: id_number
        }

       

        fetch("http://127.0.0.1:3000/user_details",{
            method: "POST",
            mode: "cors",
            headers:{
                Authorization: `Bearer ${token}`,

                "Content-Type": "application/json"
            },
            body: JSON.stringify(profileDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))


        // setNameOnAccount("")
        // setBankName("")
        // setAccountNumber("")
        // setBankCode("")
        // setBranchcode("")
        // setTelephoneNumber("")
        // setIdNumber("")
    }

   


  return (
    <>
    <Container fluid>
    <Row>
        <Col sm={12} md={6} lg={2} className='sidepanel'>

            <SidePanel/>
        </Col>
        <Col sm={12} md={6} lg={8} className='mt-5' >
            <Card  className='infocards mt-5'>
                <Card.Body className='d-flex justify-content-start'>
                
                    <span className='yellowcircle ms-2'>
                        <h1 className='name mt-lg-0'>G</h1>
                    </span>                    

                

                <Card.Text className='card-info ms-4 text-start'>
                    <p className='fulldate'>firstname</p>
                    <p className='fulldate'>role </p>
                    <p className='fulldate'>email </p>


                </Card.Text>
                </Card.Body>
            </Card>
            

            <Form onSubmit={handleSubmit} id='paymentdetails' className='p-3 mt-3'>
                <p className='payment-title text-start'>Payment Details</p>

                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="accnameinput">
                            <img className='inputlogo' src={userimg} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Name on Account"
                        aria-label="Name on Account"
                        aria-describedby="accnameinput"
                        value={name_on_account}
                        onChange={(e)=> setNameOnAccount(e.target.value)}
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="banknameinput">
                            <img className='inputlogo' src={bank} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Bank Name"
                        aria-label="banknameinput"
                        aria-describedby="banknameinput"
                        value={bank_name}
                        onChange={(e)=> setBankName(e.target.value)}
                        />
                        
                    </InputGroup>
                
                

                </Row>



                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="AccountNo">
                            <img className='inputlogo' src={account} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Account #"
                        aria-label="AccountNo"
                        aria-describedby="usernameinput"
                        value={account_number}
                        onChange={(e)=> setAccountNumber(e.target.value)}
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="BankCode">
                            <img className='inputlogo' src={binarycode} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Bank Code"
                        aria-label="BankCode"
                        aria-describedby="BankCode"
                        value={bank_code}
                        onChange={(e)=> setBankCode(e.target.value)}
                        />
                        
                    </InputGroup>
                
                

                </Row>






                <Row className="mb-3 mt-5">
                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="branchcode">
                            <img className='inputlogo' src={office} alt={"userimg"}/>
                        </InputGroup.Text>

                        <Form.Control
                        className='inputspace'
                        placeholder="Branch Code"
                        aria-label="branchcode"
                        aria-describedby="branchcodeinput"
                        value={branch_code}
                        onChange={(e)=> setBranchcode(e.target.value)}
                        />
                    </InputGroup>


                    <InputGroup as={Col} className=" mb-3">
                        <InputGroup.Text  id="Tel">
                            <img className='inputlogo' src={telephone} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        className='inputspace'
                        placeholder="Telephone #"
                        aria-label="Tel"
                        aria-describedby="Tel"
                        value={telephone_number}
                        onChange={(e)=> setTelephoneNumber(e.target.value)}
                        />
                        
                    </InputGroup>

                    
                
                

                </Row>

                <Row>
                     <InputGroup as={Col} className=" mb-3 lg-5">
                        <InputGroup.Text  id="Tel">
                            <img className='inputlogo' src={number} alt={"userimg"}/>
                        </InputGroup.Text>
                        
                        <Form.Control
                        id='idnumber'
                        placeholder="ID Number"
                        aria-label="id-number"
                        aria-describedby="ID"
                        value={id_number}
                        onChange={(e)=> setIdNumber(e.target.value)}
                        />
                        
                    </InputGroup>
                </Row>
                



              <div>
                  <Button id='updatebtn' variant="primary" type="submit">
                Update
              </Button>
              <Button id='submitbtn' className='ms-3' variant="primary" type="submit">
                Submit
              </Button>
              </div>

              
          </Form>

        </Col>
        
        
    </Row>

    </Container>
    </>
  )
}

export default Profile;