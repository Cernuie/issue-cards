import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Accordion, AccordionCollapse, Button } from 'react-bootstrap'

export default function issues({ issues }) {
  return (
        <div>
            <Accordion>
                    {Array.isArray(issues) ? issues.map((issue, index) => {
                        return(
                        <Card 
                        key={issue.index} 
                        bg='dark'
                        text='light'
                        >
                            <Card.Body>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                <Card.Title>
                                    {issue.name}
                                </Card.Title>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Text>
                                    {issue.issue}
                                </Card.Text>
                            </Accordion.Collapse>
                            </Card.Body>
                            <Card.Footer>
                                <small>Card Priority: {issue.priority}</small>
                            </Card.Footer>
                        </Card>
                        )
                    }): "Error loading issues"}
            </Accordion>
        </div>
  )
}
