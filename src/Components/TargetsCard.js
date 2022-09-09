import React, {useEffect, useState} from "react";
import '../Styling/TargetsCard.css'
import Card from 'react-bootstrap/Card'



const TargetsCard = ()=> {

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

  })


  
  return (
    <>
      <Card >
        <Card.Body>
            <Card.Title className="text-start">Card Title</Card.Title>
            <Card.Text className='text-start' id='targetdescription'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
      </Card>
    
    </>
    
  );
}
export default TargetsCard;

