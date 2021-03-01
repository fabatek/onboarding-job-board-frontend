import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

import './style.scss';
function JobSearchBar() {

    /* This is for task 03 - havent use it yet !*/
    return (
        <div className="job-section__job-search">
            <Form className="job-search__form">
            <Form.Row>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Enter job title" className="job-search__job-input"/>
                </Col> 
                <Col>
                    <Button variant="primary" type="submit" className="job-search__search-button">
                        SEARCH
                    </Button>
                </Col>

            </Form.Row>

            </Form>
        </div>
    );
}

export default JobSearchBar