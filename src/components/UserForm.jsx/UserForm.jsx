import React from "react";
import Button from "../Button/Button";

const UserForm = ({ subtitle, children, onSubmit }) => {
  return (
    <div>
      <p>{subtitle}</p>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {children}
      <Button color="primary" onClick={onSubmit}>
        Submit
      </Button>
      <p>OR</p>
      <Button color="info" onClick={onSubmit} icon="facebook.png">
        Continue with Facebook
      </Button>
      <Button color="secondary" onClick={onSubmit} icon="google.png">
        Continue with Google
      </Button>
    </div>
  );
};

export default UserForm;
