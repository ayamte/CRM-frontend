import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp';

const initialFrmDt = {
  subject:"",
  issueDate: "",
  details:"",
}

const AddTicket = () => {

  const [frmData, setFrmData] = useState(initialFrmDt);

  useEffect(() =>{}, [frmData]);

  const handleOnChange = e =>{
    const {name, value} = e.target;

    setFrmData({
      ...frmData,
      [name]: value
    })
  }

  const handleOnSubmit = e =>{
    e.preventDefault()
    console.log('Form submit request received', frmData)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="New Ticket"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTicketForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} frmDt={frmData} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddTicket

