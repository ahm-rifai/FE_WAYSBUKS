import React from 'react'
import { Card } from 'react-bootstrap';




function Cardz({title, harga, imageUrl}) {
  return (
    <Card style={{ width: '18rem', margin: '15px', background: '#F6DADA' }} >
      <Card.Img variant="top" src={imageUrl} height="300px" style={{objectFit: "cover"}} />
      <Card.Body>
        <Card.Title className='fw-bold' style={{color: '#BD0707', fontSize: '18px'}}>{title}</Card.Title>
        <Card.Text style={{color: '#974A4A'}}>Rp.{harga}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardz