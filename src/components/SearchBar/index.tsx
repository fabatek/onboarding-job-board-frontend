import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchBar(prop: any) {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Enter job title to search"
                aria-label="Job Title"
                aria-describedby="job-title"
                className="mr-3 rounded-input"
                />

                <Button variant="outline-secondary">Search</Button>
            </InputGroup>

            <p className="text-left"> {prop.matchedJobAmount} jobs found </p>  
        </>
    )
}

export default SearchBar;

