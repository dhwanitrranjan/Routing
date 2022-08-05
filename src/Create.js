import React, { useRef, useState} from 'react'
import { Form } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Create() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [err, setErr]= useState("")
    var navigate = useNavigate()

    const handleClick=(e)=>{
        e.preventDefault()
        if ((title.length === 0) || (description.length === 0) || (img.length === 0)){
            setErr("Can not be empty.")
        } else {
            var items = JSON.parse(localStorage.getItem("data")).data
            // var id = items[items.length-1].id + 1
            var id =items.length +1
            var item = {id: id, title: title, description: description, Image: img}
            items.push(item)
            var json = {"data": items}
            console.log(json)
            localStorage.setItem("data",JSON.stringify(json))
            console.log(items)
            navigate('/')
        }
    }

    return (
        <div>
            <Row>
                <Button onClick={()=>navigate('/')}>Home</Button>
                <br/>
                <Col>
                <Card>
                    <Form onSubmit={handleClick}>
                        <Form.Control placeholder='Enter Title' onChange={(e)=>{setTitle(e.target.value)}}/>
                        <br/>
                        <Form.Control placeholder='Enter Description' onChange={(e)=>{setDescription(e.target.value)}}/>
                        <br/>
                        <Form.Control placeholder='Enter Image URL' onChange={(e)=>{setImg(e.target.value)}}/>
                        {err.length !==0 && <span>{err}</span>}
                        <br/>
                        <Button type="submit">Create</Button>
                    </Form>
                </Card>
                </Col>
            </Row>
        </div>
    )
}
