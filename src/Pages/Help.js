import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Styling/Help.css'
import HelpNav from '../Components/HelpNav'




const Task = () => {
  return (
    <>
      <HelpNav/>

    <Container >
      <Row>
            <h4 className='help-titles text-center mt-4 mb-3'>Help Center</h4>
            <Col className='d-flex justify-content-center' lg={12}>
            <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchinput me-2"
              aria-label="Search"
              
            />
            <Button id='searchbtn' variant="outline-success">Search</Button>
          </Form>
            </Col>
      </Row>
        <Row>
          
            <Col className='mt-5' >
            

            <h3 className='help-titles mt-5 text-start'>Getting started: How to get started with ZanBase</h3>
            <p className='help-info text-start'>Step 1: <br/>Set up your account.To do this, create your account and open the dashboard Page. 
              Click on your profile in the bottom left corner of the window to launch the account menu and select Teams.</p>
            <p className='help-info text-start'> Step 2: <br/>
            Update your Profile Information to enable the system generate your monthly pv's accurately

              
            </p>

            <p className='help-info text-start'> Step 3: <br/>
            Update the Attendance Registry with your daily Activities

              
            </p>


            <p className='help-info text-start'> Step 4: <br/>
            Confirm on the PV's Page the activities and the report posted
              
            </p>


            <p className='help-info text-start'> Step 5: <br/>
            Tutorials Page Provides you witll all essential skills you need while working whether from home/office
              
            </p>
            



          
            </Col>
            <Col>
            
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default Task