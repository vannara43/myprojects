import React, { useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router";

function FormApp() {
  let location = useLocation().pathname.slice(12);

  useEffect(() => {
    console.log(
      `%c Welcome to ${location.toUpperCase()}! `,
      `background-color:black; color:green;font-weight:bold;font-size:25px; padding: 15px;border:3px solid green;`
    );
  }, []);

  return (
    <div
      className="other"
      style={{
        backgroundImage:
          "url(https://blog.sheetgo.com/wp-content/uploads/2021/09/google-forms-blog-images-01.png)",
        backgroundSize: "fixed",
      }}
    >
      <Form className="col col-lg-5 shadow bg-light p-5">
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <div className="col"></div>
    </div>
  );
}

export default FormApp;
