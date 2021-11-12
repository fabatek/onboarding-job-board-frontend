import React from 'react'
import { Card } from 'react-bootstrap'
import './styles.scss'

type jobContentProps = {
  title: string,
  salary: number,
  benefits: string,
  company: string,
  clickHandler: () => void,
  isSelected: boolean
}

function JobContent(props: jobContentProps) {
  return (
    <Card className={props.isSelected ? "job-content__selected" : "job-content"} style={{ width: "100%" }} onClick={props.clickHandler}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text as="h6"> {props.company}</Card.Text>
        <Card.Text>
          Benefits: {props.benefits}
        </Card.Text>
        <Card.Text className="job-content__salary">$ {props.salary} USD</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobContent
