import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'

export default function NewIssues() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = 'http://localhost:4444/api/issues/users'
        axios.get(url).then((response) => {
            setUsers(response.data.response)
        }).catch((error) => console.log(error))
    }, [])
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
        const url = 'http://localhost:4444/api/issues/new'
        return axios
        .post(url, {issueName, assigned, priority, issue})
        .then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log(e)
        })
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
                    {users.map((user) => {
                        return(
                            <option key={user.id} value={user.name}>{user.name}</option>
                        )
                    })}
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
