import React from "react";
import { Button, Label, Input, Form, FormGroup, Col, Row, Card, CardBody } from "reactstrap";

const SearchForm = props => (
    <Form>
        <FormGroup>
            <br />
            <Label for="exampleText">Search:</Label>
            <Input type="text" name="text" id="exampleText" placeholder="Try 'Costa del Sol' ..." />
        </FormGroup>
        <Button>Search</Button>
        <br />
    </Form>
)

export default SearchForm;