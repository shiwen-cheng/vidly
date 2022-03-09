import React from "react";
import Joi, { errors } from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const promise = await userService.register(this.state.data); //   call the server
    } catch (ex) {
      if (ex.response && ex.response === 400) {
        const error = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    // console.log("Submitted", promise);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
