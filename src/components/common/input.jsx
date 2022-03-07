import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // value={value}
        // onChange={onChange}
        // type={type}
        // name={name}
        {...rest}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      {/* 只有当有 error 的时候，再渲染这个组件 */}
    </div>
  );
};

export default Input;
