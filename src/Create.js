import React, { useRef, useState, useEffect} from 'react'
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

    const [Distitle, setDisTitle] = useState("")
    const [Disdescription, setDisDescription] = useState("")
    const [Disimg, setDisImg] = useState("")

    const [err, setErr]= useState("")
    var navigate = useNavigate()

    useEffect(()=>{
    if (localStorage.getItem('title') !== ""){
        setDisTitle(localStorage.getItem('title'))
    }
    if (localStorage.getItem('description') !== ""){
        setDisDescription(localStorage.getItem('description'))
    }
    if (localStorage.getItem('Image') !== ""){
        setDisImg(localStorage.getItem('Image'))
    }
    })

    // console.log(localStorage.getItem('id'))
    let id = new Date().getTime();

    const handleClick=(e)=>{
        e.preventDefault()
        if ((title.length === 0) || (description.length === 0) || (img.length === 0)){
            console.log(localStorage.getItem('title'))
            console.log(title)
            setErr("Can not be empty.")
        } else if (localStorage.getItem('id') !== null) {
            console.log("Edit")
                var items = JSON.parse(localStorage.getItem("data")).data;
                var newItem = items.filter((i)=> i.id !== Number(localStorage.getItem('id')));
                // console.log(newItem)
                // var json = {"data": newItem};
                // localStorage.setItem("data", JSON.stringify(json));
                
                // console.log(new_id);
                // var newItems = JSON.parse(localStorage.getItem("data")).data
                // var id = items[items.length-1].id
                var item = {id: id, title: title, 
                    description: description, 
                    Image: img}
                newItem.push(item)
                var json = {"data":newItem}
                localStorage.setItem("data",JSON.stringify(json))
                navigate('/')
        } else {
            var items = JSON.parse(localStorage.getItem("data")).data
            var item = {id: id, title: title, description: description, Image: img}
            items.push(item)
            var json = {"data": items}
            localStorage.setItem("data",JSON.stringify(json))
            navigate('/')
            }
        // }
    }

    return (
        <div>
            <Row>
                <Button onClick={()=>navigate('/')}>Home</Button>
                <br/>
                <Col>
                <Card>
                    <Form onSubmit={handleClick}>
                        <Form.Label>Enter Title</Form.Label>
                        <Form.Control onChange={(e)=>{setTitle(e.target.value)}} placeholder ={Distitle} />
                        <br/>
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder ={Disdescription} onChange={(e)=>{setDescription(e.target.value)}}/>
                        <br/>
                        <Form.Label>Enter Image URL</Form.Label>
                        <Form.Control placeholder ={Disimg} onChange={(e)=>{setImg(e.target.value)}}/>
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
