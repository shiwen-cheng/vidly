import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import auth from "../services/authService";
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
      await auth.login(username, password); //   call the server

      //   this.props.history.push("/"); // return to home page，index.js 中有 BrowserRouter，其中所有组件的props中都有 history 属性
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/"; // 如果用户是从别的url重定向到这里，那么（state是一个location obj，其中from.pathname记录了之前的url）跳转回之前的 url，否则重载 App.js, 使其再运行一次 cdm
      //   window.location --- 只在用户尝试登录的时候，用其重载应用
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
    if (auth.getCurUser()) return <Redirect to="/" />;

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
