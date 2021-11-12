import React from 'react'
import { FormControl, Button, Form } from 'react-bootstrap'
import './styles.scss'

function SearchHeader() {

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();

  }
  return (
    <div className="search-header">
      <h2 className="mb-3"> We are looking for talent IT Developers</h2>
      <form className="search-header__form" onSubmit={searchHandler}>
        <FormControl
          type="text"
          placeholder="Keyword skills, Job Title, Company..."
        />
        <Form.Select aria-label="Default select example">
          <option value="1">All Cities</option>
          <option value="2">Ho Chi Minh</option>
          <option value="3">Ha Noi</option>
          <option value="3">Da Nang</option>
        </Form.Select>
        <Button variant="danger" type="submit">Search</Button>
      </form>
    </div>
  )
}

export default SearchHeader
