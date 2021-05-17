import React,{Component} from "react";
import {Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class RegistrationForm extends Component {

   // TODO: Initializing state values and functions
    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangAddress = this.onChangAddress.bind(this);
        this.handleForm = this.handleForm.bind(this);

        this.state = {
            fullName: "",
            email: "",
            password: "",
            address:""
        };
    }

    // TODO: Set Values for state variables and this happen like realtime update
    onChangeFullName(event){
        this.setState({
            fullName: event.target.value
        })
    }

    onChangeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    onChangePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    onChangAddress(event){
        this.setState({
            address: event.target.value
        })
    }

    // TODO: This is the place you pass your form data to service when submit the form
    handleForm(event) {
        event.preventDefault();

        //More to Implement
    }

    render() {
        return(

        <Form className="form-group"  onSubmit={this.handleForm}>
            <div className={"form-group form-control-lg"}>
                    <h1 className={"text-center font-weight-bolder text-primary"}>SIGN UP</h1>
                    <Form.Group controlId="formBasicName">
                        <Form.Label >Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"
                                      value={this.state.fullName}
                                      onChange={this.onChangeFullName}
                                      required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      value={this.state.email}
                                      onChange={this.onChangeEmail}
                                      required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                      value={this.state.password}
                                      onChange={this.onChangePassword}
                                      required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                          value={this.state.address}
                                          onChange={this.onChangAddress}
                                          required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I accept the Terms of Service"/>
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" block={"sm"}>Submit</Button>
            </div>

        </Form>
        );

    }
}