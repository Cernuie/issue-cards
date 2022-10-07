import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Accordion } from 'react-bootstrap'

export default function issues({ issues }) {
  return (
        <div>
                <CardGroup>
                    {Array.isArray(issues) ? issues.map((issue, index) => {
                        return(
                        <Card 
                        key={issue.index} 
                        bg='dark'
                        border="primary"
                        text='primary'
                        >
                            <Card.Header>
                                {issue.name}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {issue.name}
                                </Card.Title>
                                <Card.Text>
                                    {issue.issue}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>Card Priority: {issue.priority}</small>
                            </Card.Footer>
                        </Card>
                        )
                    }): "Error loading issues"}
                </CardGroup>
        </div>
  )
}
