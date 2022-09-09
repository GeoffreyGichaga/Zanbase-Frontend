import React, {useEffect, useState} from "react";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import '../Styling/dashboard.css'
import '../Styling/TopTargets.css'



const TopTargets = () => {
  const [Targets,setTargets] = useState([])
  const token = localStorage.getItem("jwt")
  
  useEffect(()=>{

    fetch('http://127.0.0.1:3000/targets',{
      method: "GET",
      mode:'cors',
      headers:{
          Authorization: `Bearer ${token}`,

          'Content-Type':'application/json'
      }

    })
    .then(res => res.json())
    .then(data => setTargets(data))

  },[])
    
  return (
    <>
    
    
    <CardGroup className='targetsgroup  mt-5'>

        <Card id='toptargetscard1' className='p-2'>
            <Card.Body>
            <Card.Title>{Targets.title}</Card.Title>
            <Card.Text>
            {Targets.description}
                
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small id='targets-footer1' >Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>
    </CardGroup>


      
    </>
  )
}

export default TopTargets