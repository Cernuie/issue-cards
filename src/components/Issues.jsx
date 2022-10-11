import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Accordion } from 'react-bootstrap'
import axios from 'axios';

export default function Issues() {
    const [issues, setIssues] = useState([
        {
          id: 0,
          issue_name: "Issue 1",
          assigned_to: 'Name 1',
          description: "Bug 1",
          priority: "High"
        },
        {
          id: 1,
          issue_name: "Issue 2",
          assigned_to: 'Name 3',
          description: "Bug 2",
          priority: "Low"
        }
      ])
    
      useEffect(() => {
        const url = 'http://localhost:4444/api/issues'
        axios.get(url).then((res) => {
          setIssues(res.data.response)
        }).catch((e) => console.log(e))
      }, [])
    
  return (
    <Accordion className='border-end 2px overflow-auto' defaultActiveKey="0" alwaysOpen style={{width: '30%'}}>
        {issues.map((issue, index) => (
            <Accordion.Item key={issue.id} eventKey={index}>
                <Accordion.Header>
                    {issue.issue_name}
                </Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>
                            Assigned to: {issue.assigned_to}
                        </Card.Header>
                        <Card.Body>
                    {issue.description}
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
  )
}
