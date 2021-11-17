import React from 'react'
import { Card, Button } from 'react-bootstrap'

type jobContentPreviewProps = {
  title: string,
  description: string,
  requirement: string,
  benefits: string,
  salary: number,
  company: string,
  createAt: string
}

function JobContentPreview(props: jobContentPreviewProps) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <h2>{props.title}</h2>
        <p>{props.company}</p>
      </Card.Header>
      <Card.Body>
        <Card.Text>$ {props.salary} USD</Card.Text>
        <Card.Title>Job description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Title>Your skills and Experience</Card.Title>
        <Card.Text>{props.requirement}</Card.Text>
        <Card.Title>What you'll love working here</Card.Title>
        <Card.Text>{props.benefits}</Card.Text>
        <Button variant="danger">Apply Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Public at {props.createAt}</Card.Footer>
    </Card>
  )
}

export default JobContentPreview
