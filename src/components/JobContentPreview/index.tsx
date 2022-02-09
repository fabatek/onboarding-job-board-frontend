import React from 'react'
import { Card, Button } from 'react-bootstrap'

type jobContentPreviewProps = {
  title: string,
  description: string,
  requirement: string,
  benefits: string,
  salary: number,
  company: string,
}

function JobContentPreview(props: jobContentPreviewProps) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <h2>{props.title}</h2>
        <p>{props.company}</p>
      </Card.Header>
      <Card.Body>
        <Button variant="danger">Apply Now</Button>
        <Card.Text>$ {props.salary} USD</Card.Text>
        <Card.Title>Job description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>Your skills and Experience</Card.Title>
        <Card.Text>{props.requirement}</Card.Text>
        <Card.Title>What you'll love working here</Card.Title>
        <Card.Text>{props.benefits}</Card.Text>
        
        
      </Card.Body>
      <Card.Footer className="text-muted"> Việc làm IT</Card.Footer>
    </Card>
  )
}

export default JobContentPreview
