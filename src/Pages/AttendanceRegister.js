import React,{ useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import '../Styling/Register.css'
import Button  from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'





const AttendanceRegister = () => {

        const [date,setDate] = useState('')
        const [timeIn,setTimeIn] = useState('')
        const [timeOut,setTimeOut] = useState('')
        const [activities,setActivities] = useState('')
        const [sign,setSign] = useState('')
        const [checkedBy,setCheckedBy] = useState('')

        const [submittedData,setSubmittedData] = useState([])



        function handleSubmit(e){
            e.preventDefault()
             const attendanceData = {
                 date,
                 timeIn,
                 timeOut,
                 activities,
                 sign,
                 checkedBy
             }

             fetch('https://zanbase-backend.herokuapp.com/attendances',{
                method: "POST",
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(attendanceData)
            })
            .then(res=> res.json())
            .then(data=> console.log(data))



            setDate(' ')
            setTimeIn(' ')
            setTimeOut(' ')
            setActivities(' ')
            setSign('')
            setCheckedBy('')
            refreshAttendance()
            
        }


        function refreshAttendance(){
            
            setInterval(function(){
                fetch('https://zanbase-backend.herokuapp.com/attendances')
                .then(res => res.json())
                .then(resdata => setSubmittedData(resdata))
            }, 2000)
        }            
        


        const displayNewAttendanceData = submittedData.map((sd)=>(
            <tr>
                <td>{sd.date}</td>
                <td>{sd.timeIn}</td>
                <td>{sd.timeOut}</td>
                <td>{sd.activities}</td>
                <td>{sd.sign}</td>
                <td>{sd.checkedBy}</td>
            </tr>

        ))



  return (
      <>
      <Container fluid>
        <Row className='flexable justify-content-start'>
            <Col id='attendacesidepanel' sm={12} md={6} lg={2}  className='sidepanel'>

                <SidePanel/>
            </Col>

            <Col sm={12} md={6} lg={8} className='scrollit mt-5 ms-5  ' >


                <Card  className='infocards mt-4'>
                    <Card.Body className='d-flex justify-content-start'>
                    
                        <span className='yellowcircle ms-2'>
                            <h1 className='name mt-lg-0'>G</h1>
                        </span>                    

                    

                    <Card.Text className='card-info ms-4 text-start'>
                        <p className='fulldate'>User NAME </p>
                        <p className='fulldate'>Position </p>
                        <p className='fulldate'>Email </p>
                        <Button id='addtaskbtn'>Add Today's Activities</Button>
                    </Card.Text>
                    
                    </Card.Body>
                </Card>


                <Accordion className='formaccodion'>
                <Accordion.Item eventKey="1">
                <Accordion.Header className='accordionheaders'>Add Targets</Accordion.Header>
                    <Accordion.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="targetinput mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={(e)=> setDate(e.target.value)} type="text" value={date} placeholder="Enter date" />
                            
                        </Form.Group>


                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={timeIn} onChange={(e)=> setTimeIn(e.target.value)} placeholder='Time In' as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={timeOut} onChange={(e)=> setTimeOut(e.target.value)} placeholder='Time Out' as="textarea" rows={3} />
                        </Form.Group>


                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={activities} onChange={(e)=> setActivities(e.target.value)} placeholder='Activities' as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={sign} onChange={(e)=> setSign(e.target.value)} placeholder='Sign' as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={checkedBy} onChange={(e)=> setCheckedBy(e.target.value)} placeholder='CheckedBy' as="textarea" rows={3} />
                        </Form.Group>




                        <Button id='tboardsbtn' type="submit">
                            Submit
                        </Button>
                    </Form>
            
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>

                
            


            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>TimeIn</th>
                    <th>Time Out</th>
                    <th>Activities</th>
                    <th>Sign</th>
                    <th>Checked By:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1/7/2022</td>
                        <td>0800</td>
                        <td>1700</td>
                        <td>Web Dev</td>
                        <td>G.G</td>
                        <td>Jane</td>
                    </tr>
                    {displayNewAttendanceData}

                  
                </tbody>
            </Table>
            </Col>

            

        </Row>
        

      </Container>
      </>
    
  )
}

export default AttendanceRegister