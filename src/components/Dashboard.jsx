import React,  { useState,useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Topbar from './common/Topbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import{ API_URL} from '../App'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dashboard() {

  const [bookData, setBookData] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    getUserData()
  },[])

  const getUserData = async() => {
    try {
      let res = await axios.get(API_URL)
      if(res.status === 200){
        setBookData(res.data)
      }
    } catch (error) {
      alert("data fetch failed")
    }
  }

  const handleDelete = async(id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`)
      if(res.status === 200){
        getUserData();
      }
    } catch (error) {
      alert("data removal failed")
    }
  }

  return <>
    <Topbar/>
    <Container>
      <Row className='d-flex justify-content-center flex-row'>
        {
          bookData.map((e,i)=>{
            return <>
              <div  style={{ width: 'max-content'}}>
              <Card className='mt-5' style={{ width: '25rem'}} key={i}>
                <Card.Img variant="top" src={e.image} /> 
                <Card.Body>
                  <Card.Title><strong>Title :</strong> {e.title}</Card.Title>
                  <Card.Text><strong>Author :</strong> {e.author}</Card.Text>
                  <Card.Text><strong>ISBN No :</strong> {e.ISBN}</Card.Text>
                  <Card.Text><strong>Description :</strong> {e.description}</Card.Text>
                  <Card.Text><strong>Published At :</strong> {e.date}</Card.Text>
                  <Button variant="secondary">Edit</Button>
                  &nbsp;
                  <Button variant="danger" onClick={()=>{handleDelete(e.id)}}>Delete</Button>
                </Card.Body>
              </Card>
              </div>
            </>
          })
        }
      </Row>
    </Container>
    
  </>
}

export default Dashboard