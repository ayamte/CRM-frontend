import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';
import MessageHistory from '../../components/message-history/MessageHistory.comp';
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from "react-router-dom";
import { closeTicket, fetchSingleTicket } from '../ticket-list/ticketAction';
import { resetResponseMsg } from '../ticket-list/ticketSlice';



const Ticket = () => {


  const dispatch = useDispatch();
  const {isLoading,
         error, 
         selectedTicket, 
         replyMsg, 
         closeTicketMsg, 
         replyTicketError
      } = useSelector((state) =>state.tickets);

  const {tId} = useParams();



  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
    return () => {
      (replyMsg || replyTicketError || closeTicketMsg) && dispatch(resetResponseMsg()); 
    };
  }, [tId, dispatch, replyMsg, replyTicketError, closeTicketMsg ]);

  


  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket"/>
          </Col>
        </Row>
        <Row>
          <Col>
          {closeTicketMsg && <Alert variant="success">{closeTicketMsg}</Alert>}
            {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
            {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
            {isLoading && <Spinner variant='primary' animation="border"/>}
            {error && <Alert variant="danger">{error}</Alert>}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className='font-weight-bold text-secondary'>
            <div className='subject'>subject:  {selectedTicket.subject} </div>
            <div className='date'>
                Ticket Opened:{" "}
                {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}
             </div>
            <div className='status'>Status:  {selectedTicket.status}</div>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button variant="outline-info" onClick={() => dispatch(closeTicket(tId))}
						disabled={selectedTicket.status === "Closed"}>
              Close Ticket
            </Button>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col>
          {selectedTicket.conversations && <MessageHistory msg={selectedTicket.conversations} />}
          </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
          <Col>
          <UpdateTicket 
              _id={tId}
              />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Ticket
