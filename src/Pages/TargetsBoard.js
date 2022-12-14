import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form';
import '../Styling/TargtesBoard.css';
import Modal from 'react-bootstrap/Modal';




const Task = () => {

    const [title,setTitle] = useState(" ")
    const [description,setDescription] = useState(" ")
    const token = localStorage.getItem("jwt")
    const [modal,setModal]=useState(false)
    const [newTargets,setNewTargets] = useState([])




   
    

    function handleSubmit(e){
        e.preventDefault()

        const data = {
            title,
            description
        }

        fetch('http://127.0.0.1:3000/targets',{
            method: "POST",
            mode: 'cors',
            headers:{
                Authorization: `Bearer ${token}`,

                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data2=> console.log(data2))


        setTitle("")
        setDescription("")
        setNewTargets([])

          
    }


    
    


    const displayTargets = newTargets.map((targs)=>(
        <Card >
        <Card.Body>
            <Card.Title className="text-start">{targs.title}</Card.Title>
            <Card.Text className='text-start' id='targetdescription'>
            {targs.description}
            </Card.Text>
        </Card.Body>
      </Card>

    ))


    // Add new Targets
    const showModal = ()=>{
        setModal(true)
    }
    const hideModal = ()=>{
        setModal(false)
    }

  return (
    <Container fluid>
        <Row>
            <Col sm={12} md={6} lg={2} className='sidepanel'>

                <SidePanel/>
            </Col>



            <Col sm={12} md={6} lg={8} className='mt-5' >
            <Card  className='infocards mt-5'>
                <Card.Body className='d-flex justify-content-start'>
                
                    <span className='yellowcircle ms-2'>
                        <h1 className='name mt-lg-0'>T</h1>
                    </span>                    

                

                <Card.Text className='card-info ms-4 text-start'>
                    <p className='fulldate'>Targets Board </p>
                    

                </Card.Text>
                </Card.Body>
            </Card>



            {/* Adding new Targets  */}
            <div className='d-flex justify-content-start mt-3 mb-3'>
                <Button onClick={showModal} id='attendance-modal-btn'>New Targets</Button>

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
                        Add New Targets
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="targetinput mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Tittle</Form.Label>
                            <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" value={title} placeholder= "Enter title" />
                            
                        </Form.Group>




                        <Form.Group className="targetinput mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Description</Form.Label>

                            <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description' as="textarea" rows={3} />
                        </Form.Group>




                        <Button id='tboardsbtn' type="submit">
                            Submit
                        </Button>
                    </Form>
                        




                        
                        
                    </Modal.Body>
                </Modal>

            





            <Accordion defaultActiveKey="0">


                <Accordion.Item eventKey="0">
                    <Accordion.Header className='accordionheaders'>August Targets</Accordion.Header>
                    <Accordion.Body>
                    <CardGroup>
                        {displayTargets}
                    

                    
                    </CardGroup>
                     </Accordion.Body>
                </Accordion.Item>






                
            </Accordion>
                
            
            </Col>
        </Row>

    </Container>
  )
}

export default Task