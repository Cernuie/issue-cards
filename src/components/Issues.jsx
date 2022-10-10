import React from 'react'
import Card from 'react-bootstrap/Card'
import { Accordion } from 'react-bootstrap'

export default function issues({ issues }) {

  return (
    <Accordion className='border-end 2px overflow-auto' defaultActiveKey="0" alwaysOpen style={{width: '30%'}}>
        {issues.map((issue, index) => (
            <Accordion.Item key={issue.index} eventKey={index}>
                <Accordion.Header>
                    {issue.name}
                </Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>
                            Assigned to: {[...issue.assigned_to]}
                        </Card.Header>
                        <Card.Body>
                    {issue.issue}
                        </Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
  )
}
