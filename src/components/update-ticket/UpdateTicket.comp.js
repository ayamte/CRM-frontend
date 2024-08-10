import React from 'react'
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const UpdateTicket = ({msg, handelOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit} >

      <div className="d-flex flex-column">
        <Form.Label>Reply</Form.Label>
        <Form.Text>Please reply to your message here or update the ticket</Form.Text>
      </div>

      <Form.Control
      value={msg}
      onChange={handelOnChange}
      as="textarea"
      row="5"
      name="detail"
      />

      <div className='d-flex justify-content-end mt-5' >
        <Button variant="info" type="submit" >Reply</Button>
      </div>
      

    </Form>
  )
}

export default UpdateTicket

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handelOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
}
