import React from 'react';
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import  PropTypes  from "prop-types";
import './add-ticket-form.style.css';


const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt }) => {
  console.log(frmDt);
  return (
    <Container className="p-5 mb-4 bg-light rounded-3  add-new-ticket">
      <h1 className="mb-4 text-info text-center" >Add New Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Col sm={9}>
          <Form.Control
            name="subject"
            value ={frmDt.subject}
            onChange={handleOnChange}
            placeholder="Enter Subject"
            required
          />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>Issue Found</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value ={frmDt.date}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            value ={frmDt.details}
            onChange={handleOnChange}
            rows="5"
            placeholder="Enter details"
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Submit Ticket
        </Button>
      </Form>
    </Container>
  );
}

export default AddTicketForm;

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
}
