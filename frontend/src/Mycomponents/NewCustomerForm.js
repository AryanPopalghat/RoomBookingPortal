import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

import { API_URL } from "../constants";

class NewCustomerForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    members: "",
    phone: "",
    comment: "",
  };
  componentDidMount() {
    if (this.props.customer) {
      const { pk, name, email, members, phone, comment } = this.props.customer;
      this.setState({ pk, name, email, members, phone, comment });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  createCustomer = (e) => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editCustomer = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };
  render() {
    return (
      <>
        <div>
          <Form
            onSubmit={
              this.props.customer ? this.editCustomer : this.createCustomer
            }
            className="container my-5 bg-dark py-5 px-5"
            style={{
              borderRadius: "3em",
              color: "aliceblue",
              textAlign: "left",
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                <div className="mb-3">
                  <Label htmlFor="name" className="Form-Label">
                    Name
                  </Label>
                  <Input
                    name="name"
                    value={this.defaultIfEmpty(this.state.name)}
                    onChange={this.onChange}
                    type="text"
                    className="Form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Your Full Name"
                  />
                </div>
                </FormGroup>
                <FormGroup>
                <div className="mb-3">
                  <Label htmlFor="email" className="Form-Label">
                    Email address
                  </Label>
                  <Input
                    name="email"
                    value={this.defaultIfEmpty(this.state.email)}
                    onChange={this.onChange}
                    type="email"
                    className="Form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                  />
                  <div id="emailHelp" className="Form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                </FormGroup>
                <FormGroup>
                <div className="mb-3">
                  <Label htmlFor="members" className="Form-Label">
                    Enter total no. of numbers those will live in a room
                  </Label>
                  <Input
                    name="members"
                    value={this.defaultIfEmpty(this.state.members)}
                    onChange={this.onChange}
                    type="number"
                    className="Form-control"
                    id="members"
                    aria-describedby="text"
                    placeholder="Number of members"
                  />
                </div>
                </FormGroup>
              </div>
              
              <div className="col-md-6">
              <FormGroup>
                <div className="mb-3">
                  <Label htmlFor="phone" className="Form-Label">
                    Contact No.
                  </Label>
                  <Input
                    name="phone"
                    value={this.defaultIfEmpty(this.state.phone)}
                    onChange={this.onChange}
                    type="text"
                    className="Form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                    placeholder="preferred WA No."
                  />
                  
                </div>
                </FormGroup>
                <FormGroup>
                <div className="mb-3">
                  <Label htmlFor="comment" className="Form-Label">
                    Any other comments/instruction?
                  </Label>
                  <textarea
                    name="comment"
                    className="Form-control"
                    id="comment"
                    rows="3"
                    value={this.defaultIfEmpty(this.state.comment)}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                </FormGroup>
                <div className="mb-3 Form-check">
                  <Input
                    type="checkbox"
                    className="Form-check-Input"
                    id="check"
                  />
                  <Label className="Form-check-Label" htmlFor="check">
                    Check me out
                  </Label>
                </div>
              </div>
            </div>

            <Link to="/roomselect">
              <Button type="submit" name="submit" className="btn btn-secondary">
                Next-&gt;
              </Button>
            </Link>
          </Form>
        </div>
      </>
    );
  }
}

export default NewCustomerForm;
