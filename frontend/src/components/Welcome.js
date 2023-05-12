import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h4>In order to start ENTER any search term in the input field.</h4>
    <p>
      <Button variant="success" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
