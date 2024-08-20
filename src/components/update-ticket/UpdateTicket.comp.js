import React, {useState} from 'react'
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { replyOnTicket } from '../../page/ticket-list/ticketAction';



const UpdateTicket = ({_id}) => {


  const dispatch = useDispatch();
  const {user:{name}} = useSelector((state) => state.user);

  const [message, setMessage] = useState('');

  const handelOnChange = (e) =>{
    setMessage(e.target.value);
  };

  const handleOnSubmit =(e)=>{
    e.preventDefault();
    const msgObj = {
      message,
      sender: name,

    };

    dispatch(replyOnTicket(_id, msgObj));
    setMessage("");
  };


  return (
  <div>
    
    <Form onSubmit={handleOnSubmit} >

      <div className="d-flex flex-column">
        <Form.Label>Reply</Form.Label>
        <Form.Text>Please reply to your message here or update the ticket</Form.Text>
      </div>

      <Form.Control
      value={message}
      onChange={handelOnChange}
      as="textarea"
      row="5"
      name="detail"
      />

      <div className='d-flex justify-content-end mt-5' >
        <Button variant="info" type="submit" >Reply</Button>
      </div>
    </Form>
  </div>
  )
}

export default UpdateTicket

UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,
}
