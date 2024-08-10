import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import MessageHistory from '../../components/message-history/MessageHistory.comp';
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from "react-router-dom";

// const ticket = tickets[0]

const Ticket = () => {

  const {tId} = useParams()

  const [message, setMessage] = useState('');
  const [ticket, setTicket] = useState('');

  useEffect(() =>{
    for(let i=0; i < tickets.length; i++){
      if(tickets[i].id == tId ){
        setTicket(tickets[i])
        continue
      }}
  }, [message, tId]);

  const handelOnChange = (e) =>{
    setMessage(e.target.value);
  };

  const handleOnSubmit =()=>{
    alert('Form submited!')
  }

  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket"/>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className='font-weight-bold text-secondary'>
            <div className='subject'>subject:  {ticket.subject} </div>
            <div className='date'>Date:  {ticket.addedAt}</div>
            <div className='status'>Status:  {ticket.status}</div>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button variant="outline-info">Close Ticket</Button>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col>
          {ticket.history && <MessageHistory msg={ticket.history} />}
          </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
          <Col>
          <UpdateTicket 
              msg={message} 
              handelOnChange={handelOnChange}
              handleOnSubmit={handleOnSubmit}
              />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Ticket
