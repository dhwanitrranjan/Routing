import React, { useRef, useState} from 'react'
import { Form } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Create() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [err, setErr]= useState("")


    const handleClick=(e)=>{
        e.preventDefault()
        if ((title.length === 0) || (description.length === 0) || (img.length === 0)){
            setErr("Can not be empty.")
        } else {

        }
    }

    return (
        <div>
            <Row>
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
