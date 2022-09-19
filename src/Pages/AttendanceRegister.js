import React,{ useState, useContext, useEffect} from 'react'
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
import consumer from '../Components/consumer'
import '../Styling/attendance.css'
import Modal from 'react-bootstrap/Modal';




import { UserContext } from '../custom-hooks/user'



const AttendanceRegister = () => {

        const [date,setDate] = useState('')
        const [timeIn,setTimeIn] = useState('')
        const [timeOut,setTimeOut] = useState('')
        const [activities,setActivities] = useState('')
        const [sign,setSign] = useState('')
        const [checkedBy,setCheckedBy] = useState('')
        const [SubmittedData,setSubmittedData] = useState([])
        const [existingData,setExistingData] = useState([])
        const [modal,setModal]=useState(false)


        const token = localStorage.getItem("jwt")

        const {user} = useContext(UserContext)

    console.log(user);
        // On page mount ,fetch and display existing attendance records
        useEffect(() => {
            fetch('http://127.0.0.1:3000/attendances',{
                method: "GET",
                mode:'cors',
                headers:{
                    Authorization: `Bearer ${token}`,

                    'Content-Type':'application/json'
                }


            })
            .then(res => res.json())
            .then(resJson => setExistingData(resJson))
          
        
          
        }, [])

        
        
       


        // New attendance record submission
        function handleSubmit(e){
            e.preventDefault()
             const attendanceData = {
                 user_id: user.id,
                 date: date,
                 timeIn: timeIn,
                 timeOut: timeOut,
                 activities: activities,
                 sign: sign,
                 checkedBy: checkedBy
             }

             fetch('http://127.0.0.1:3000/attendances',{
                method: "POST",
                mode:'cors',
                headers:{
                    Authorization: `Bearer ${token}`,

                    'Content-Type':'application/json'
                },
                body: JSON.stringify(attendanceData)
            })
            .then(res=> res.json())
            .then(data=> console.log(data))

            

            setDate('')
            setTimeIn('')
            setTimeOut('')
            setActivities('')
            setSign('')
            setCheckedBy('')
            setModal(false)
            
        }

        

        
         // Attendance Broadcast
         consumer.subscriptions.create("AttendancesChannel",{
            connected(){
                console.log("Connected to Attendance Channel")
            },
            disconnected(){
                console.log("Disconnected to Attendance Channel")
            },

            received(data){
                setSubmittedData(data)
                // console.log("This was just submitted", data)
            }
        }) 

        // new data from Broadcast
        const combineExistingNew = [...existingData, SubmittedData]
       



        const displayNewAttendanceData = combineExistingNew.map((data)=>(
            <tr>
                <td key={data.date}>{data.date}</td>
                <td key={data.timeIn}>{data.timeIn}</td>
                <td key={data.timeOut}>{data.timeOut}</td>
                <td key={data.activities}>{data.activities}</td>
                <td key={data.sign}>{data.sign}</td>
                <td key={data.setCheckedBy}>{data.checkedBy}</td>
            </tr>

        ))
        

        const showModal = ()=>{
            setModal(true)
        }
        const hideModal = ()=>{
            setModal(false)
        }
       



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
                        </Card.Text>
                    
                    </Card.Body>
                   

                    
                    
                </Card>

                {/* Display Attendance form Modal  */}
                <div className='d-flex justify-content-start mt-3'>
                    <Button onClick={showModal} id='attendance-modal-btn'>Add Today's Activities</Button>

                </div>


                <Modal
                    show={modal}
                    onHide={hideModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                        Attendance Register
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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
                        
                    </Modal.Body>
                </Modal>





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