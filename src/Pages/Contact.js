import React from "react";
import { Button, Form } from "react-bootstrap";


export default function Contact() {
    const details = {
        subject:"",
        body:""
    }

    const updateMessage= e => {


    }

    return(
        <div>

            <Form className="form-wrapper">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select>
                        <option>Request</option>
                        <option>Inquiry</option>
                        <option>Other</option>
                    </Form.Select>
                    {/* <Form.Text className="text-muted">
                        Request an item be added, ask a qu
                    </Form.Text> */}
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Message
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={updateMessage}  />
                </Form.Group>
            </Form>
      </div>
    );


};
