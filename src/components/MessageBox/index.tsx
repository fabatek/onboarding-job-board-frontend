import React from 'react'
import { Alert } from 'react-bootstrap'
import "./styles.scss"

type messageBoxProps = {
  children: React.ReactNode,
  variant: string
}

function MessageBox(props: messageBoxProps) {
  return (
    <Alert variant={props.variant}>
      {props.children}
    </Alert>
  )
}

export default MessageBox
