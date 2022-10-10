import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function NewIssues() {
    const nameRef = useRef()
    const assignedRef = useRef()
    const priorityRef = useRef()
    const issueRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()

        console.log(nameRef.current.value, assignedRef.current.value, priorityRef.current.value, issueRef.current.value)
    }
  return (
    <div>
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
