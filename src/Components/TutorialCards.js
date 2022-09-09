import React,{useState,useEffect} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../Styling/Tutorialcards.css'
import Collapse from 'react-bootstrap/Collapse';


const TutorialCards = () => {
  const [open, setOpen] = useState(false);
  const [tutorials,setTutorials] = useState([])
  const token = localStorage.getItem("jwt")
  
  useEffect(()=>{
    fetch('http://127.0.0.1:3000/tutorials',{
      method: "GET",
      mode:'cors',
      headers:{
          Authorization: `Bearer ${token}`,

          'Content-Type':'application/json'
      }
    })
    .then(res=> res.json())
    .then(data=> setTutorials(data))
    
  },[])


  const tutorialsArray = Array.from(tutorials)


  const displayTutorias = tutorialsArray.map((tutorial)=>(
      <Card className='mx-1'>
        <Card.Img variant="top" src={tutorial.image_url} />
        <Card.Body>
            <Card.Title>{tutorial.title}</Card.Title>
            <Card.Text className='tut-info'>
            {tutorial.description}
            </Card.Text>

            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              id='seecourse3'
            >
              View Course Link
            </Button>

            <Collapse in={open}>
              <div id="example-collapse-text">
                <a href={tutorial.video_url}>{tutorial.title}</a>
              </div>
            </Collapse> 
        </Card.Body>
      </Card>
  ))

  
  return (

    <>
    <p className='titlet text-start mt-1'>Top Tutorials</p>
    <CardGroup className='mt-5'>
      {displayTutorias}
        
    </CardGroup>
    </>
  )
}

export default TutorialCards