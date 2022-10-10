import React, { useRef } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'

export default function NewIssues() {
    const url = '/api/issues/new'
    const nameRef = useRef()
    const assignedRef = useRef()
    const priorityRef = useRef()
    const issueRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        const issueName = nameRef.current.value
        const assigned = assignedRef.current.value
        const priority = priorityRef.current.value
        const issue = issueRef.current.value
        // return axios
        // .post(url, {issueName, assigned, priority, issue})
        console.log(nameRef.current.value, assignedRef.current.value, priorityRef.current.value, issueRef.current.value)
    }
  return (
    <div style={ {margin: '0.5em' } }>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Issue Name</Form.Label>
                <Form.Control type="text" ref={nameRef} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Assign this issue to:</Form.Label>
                <Form.Select ref={assignedRef}>
                    <option value="name 1"> Name 1 </option>
                    <option value="name 2"> Name 2 </option>
                    <option value="name 3"> Name 3 </option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Describe the issue:</Form.Label>
                <Form.Control type="text" ref={issueRef} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Priority:</Form.Label>
            <Form.Select ref={priorityRef}>
                <option value="low"> Low</option>
                <option value="medium"> Medium</option>
                <option value="high"> High</option>
            </Form.Select>

            </Form.Group>
            <Button type="submit">Create Issue</Button>

        </Form>
    </div>
  )
}
