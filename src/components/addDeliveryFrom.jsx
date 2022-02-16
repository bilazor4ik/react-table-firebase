import React, { Component } from 'react';
import { Form, Container, Row, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../util/firebase';


class AddDeliveryForm extends Component {

  constructor() {
    super();
    this.state = {
      dateOrdered: '',
      deliveryVendor: '',
      ticketNumber: '',
      eta: '',
      deliveires:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  // Recieve event from inputs
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //submit to database state
  handleSubmit(e) {
    e.preventDefault();
    const deliveriesRef = firebase.database().ref('deliveries');
    const delivery = {
      dateOrdered: this.state.dateOrdered,
      deliveryVendor: this.state.deliveryVendor,
      ticketNumber: this.state.ticketNumber,
      eta: this.state.eta
    }
    deliveriesRef.push(delivery);
    this.setState({
      dateOrdered: '',
      deliveryVendor: '',
      ticketNumber: '',
      eta:''
    });
  }
// Read Data from database
  componentDidMount() {
    const deliveiresRef = firebase.database().ref('deliveries');
    deliveiresRef.on('value', (snapshot) => {
      let deliveires = snapshot.val();
      let newState = [];
      for (let item in deliveires) {
        newState.push({
          dateOrdered: deliveires[item].dateOrdered,
          deliveryVendor: deliveires[item].deliveryVendor,
          ticketNumber: deliveires[item].ticketNumber,
          eta: deliveires[item].eta
        });
      }
      this.setState({
        deliveires: newState
      });
    });
  }


  render() {
    return (
      <Container>
        <Row>
        <Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Date Ordered</th>
      <th>Delivery Vendor</th>
      <th>CW Ticket Number</th>
      <th>ETA</th>

    </tr>
  </thead>
  <tbody>
  
    
      {this.state.deliveires.map((item) => {
        return (
          <tr>
          <td>{item.dateOrdered}</td>
          <td>{item.deliveryVendor}</td>
          <td>{item.ticketNumber}</td>
          <td>{item.eta}</td>

          </tr>
        )
      })}
    
   
    
  </tbody>
</Table>
       
   
  
    




          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="dateOrdered">
              <Form.Label>Date Ordered</Form.Label>
              <Form.Control type="date" name="dateOrdered" onChange={this.handleChange} value={this.state.dateOrdered} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deliveryVendor">
              <Form.Label>Delivery Vendor</Form.Label>
              <Form.Select name='deliveryVendor'  onChange={this.handleChange} value={this.state.deliveryVendor}>
                <option>Select Delivery Vendor</option>
                <option value="Amazon">Amazon</option>
                <option value="FedEx">FedEx</option>
                <option value="UPS">UPS</option>
                <option value="USPS">USPS</option>
                <option value="Unknow">Unknow</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ticketNumber">
              <Form.Label>CW Ticket Number</Form.Label>
              <Form.Control type="text" maxLength={6} name="ticketNumber" onChange={this.handleChange} value={this.state.ticketNumber} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eta">
              <Form.Label>ETA</Form.Label>
              <Form.Control type="date" name="eta" onChange={this.handleChange} value={this.state.eta} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>

          </Form>
        </Row>
      </Container>



    )
  }
}
export default AddDeliveryForm;