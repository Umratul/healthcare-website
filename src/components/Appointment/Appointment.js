import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div className="m-5">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Problem</Form.Label>
    <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button  type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Appointment;