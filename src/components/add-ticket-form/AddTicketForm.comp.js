import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, Alert, Spinner } from "react-bootstrap";
import './add-ticket-form.style.css';
import { shortText } from '../../utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import { openNewTicket } from './addTicketAction';


const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);

  const { isLoading, error, successMsg } = useSelector(
    (state) => state.openTicket
  );

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  // useEffect(() => {
  //   return () => {
  //     successMsg && dispatch(restSuccessMSg());
  //   };
  // }, [dispatch, frmData, frmDataErro]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    dispatch(openNewTicket({...frmData, sender: name}));

  };

  return (
    <Container className="p-5 mb-4 bg-light rounded-3 add-new-ticket">
      <h1 className="mb-4 text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>

      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              placeholder="Enter Subject"
              required
            />
            <Form.Text className="text-danger">
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>Issue Found</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={frmData.message}
            onChange={handleOnChange}
            rows="5"
            placeholder="Enter details"
            required
          />
           
        </Form.Group>

        <Button type="submit" variant="info" block>
          open Ticket
        </Button>
      </Form>
    </Container>
  );
}

export default AddTicketForm;
