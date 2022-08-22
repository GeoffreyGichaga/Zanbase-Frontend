import React, {useEffect, useState} from "react";
import '../Styling/TargetsCard.css'
import Card from 'react-bootstrap/Card'



const TargetsCard = ()=> {

  const [Targets,setTargets] = useState([])

  useEffect(()=>{

    fetch('https://zanbase-backend.herokuapp.com/targets')
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

