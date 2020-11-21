import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Table extends Component {
    render() {
        return (
            <div>
            <div>
               <Button variant="Primary">Primary Button</Button> 
            </div>
        <>
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
</>
        </div>
        )
    }
}
