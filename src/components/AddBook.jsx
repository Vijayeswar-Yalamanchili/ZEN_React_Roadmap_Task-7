import React, { useState } from 'react'
import Topbar from './common/Topbar'
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import{ API_URL} from '../App'
import { useNavigate } from 'react-router-dom';

function AddBook() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [isbnNum, setIsbnNum] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  // const [imgFile, setImgFile] = useState("")
  const navigate = useNavigate()
  
  const handleCreate = async() => {
    try {
      let data = { title,author,isbnNum,description,date }
      // console.log(data);
      let res = await axios.post(API_URL,data) 
      console.log(res);
      if(res.status === 201){                     // 201 is for creating status
        navigate('/')
      }
    } catch (error) {
      alert("failed to create a book")
    }
  }

  return <>
    <Topbar/>
    <div>
      <Container>
        <Form className='mt-5'>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Book Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="Enter Author Name" onChange={(e)=>{setAuthor(e.target.value)}}/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control type="text" placeholder="Enter ISBN Number" onChange={(e)=>{setIsbnNum(e.target.value)}}/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder='Enter Description' onChange={(e)=>{setDescription(e.target.value)}}/>
            </Form.Group>
          </Col>
          {/* <Row> */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Published at</Form.Label>
                <Form.Control type='date' placeholder="Enter published date" onChange={(e)=>{setDate(e.target.value)}}/>
              </Form.Group>
            </Col>
            {/* <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Upload Cover Image file</Form.Label>
                <Form.Control type='file' onChange={(e)=>{setImgFile(e.target.value)}}/>
              </Form.Group>
            </Col> */}
          {/* </Row> */}
          <Button variant="primary" onClick={()=>{handleCreate()}}>Submit</Button>
        </Form>
      </Container>
    </div>
</>
}

export default AddBook