import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";
import { toast } from "react-toastify";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    // 创建表单一定要初始化 state
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //   username = React.createRef(); // 建立 ref

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data;
      const { data: jwt } = await login(username, password); //   call the server
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
      // toast.error("Wrong user or password.");
    }
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
