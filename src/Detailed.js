import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export default function Detailed() {
  var idClicked = localStorage.getItem("idClicked")
  var items = JSON.parse(localStorage.getItem("data")).data;
  var navigate = useNavigate()

  var item = items.filter((i)=>{
    if (i.id === Number(idClicked)){
      return i
    }
  })

  const handleDel = (id) =>{
    const newItem = items.filter((i)=> i.id !== id)
    var json = {"data": newItem}
    localStorage.setItem("data", JSON.stringify(json))
    navigate('/')
  }

  const handleEdit = (e) =>{
    console.log("hi")
    console.log(e.id)
    localStorage.setItem("id", e.id)
    localStorage.setItem("title", e.title)
    localStorage.setItem("description", e.description)
    localStorage.setItem("Image", e.Image)
    navigate('/create')
  }

  return (
    <div>
      <Row>
        <Button onClick={()=> navigate('/')}>Home</Button>
        <Col md={{span:6, offset:3}}>
          <Card>
            <Card.Img varient="top" src={item[0].Image} />
            <Card.Title>{item[0].title}</Card.Title>
            <Card.Text>{item[0].description}</Card.Text>
            <Row>
              <Col md={{span:5, offset:1}}>
                <Button onClick={()=>handleDel(item[0].id)}>Delete</Button>
              </Col>
              <Col md={{span:5, offset:1}}>
                <Button onClick={()=>handleEdit(item[0])}>Edit</Button>
              </Col>   
            </Row> 
          </Card>
        </Col>
      </Row>
    </div>
  )
}
