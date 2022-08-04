import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

var info = [{"title": "Lamborghini Urus",
  "description": "Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph. The design, performance, driving dynamics and driving emotion flow effortlessly into this visionary approach to Lamborghini DNA.",
  "Image": "https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"}]

var json = {"data": info}
localStorage.setItem("data",JSON.stringify(json))

function App() {
  var [items, setItem] = useState([])
  var navigate = useNavigate()

  useEffect(()=>{
    var items = JSON.parse(localStorage.getItem("data")).data;
    setItem(items);
  },[])

  const handleClick = () =>{
  navigate("/create")
  }

  return (
    <div className="App">
      <Button onClick={handleClick}>Create</Button>
      <br/>
      <Row>
        {items.map((item)=>{
          return (
            <Col md={{span:4}}>
              <Card>
                <Card.Img varient="top" src={item.Image}/>
                <Card.Title>{item.title}</Card.Title>
                <Button onClick={()=>navigate("/details")}>More Details</Button>
              </Card>
            </Col>
        )})}
      </Row>
    </div>
  );
}

export default App;
