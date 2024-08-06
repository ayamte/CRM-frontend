import React from 'react';
import PropTypes from 'prop-types'
import  {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, frmSwitcher, email}) => {
  return (
    <Container>
      <Row>
        <Col>
        <h1 className="text-info text-center">Reset Password</h1>
        <hr/>
        <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
             type="email"
             name="email"
             value={email}
             onChange = {handleOnChange}
             placeholder="Enter Email"
             required
             
            />
          </Form.Group>
          


          <Button type="submit">Reset Password</Button>
        </Form>
        <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => frmSwitcher('login')}>Loging Now</a>
        </Col>

      </Row>

    </Container>
  )
}

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  frmSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}