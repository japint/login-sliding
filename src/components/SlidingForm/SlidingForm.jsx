import cx from "classnames";
import Button from "../Button/Button";
import classes from "./SlidingForm.module.css";
import UserForm from "../UserForm.jsx/userForm";

const SlidingForm = ({ isSignUp, onSignUpChange }) => {
  return (
    <div className={classes["sliding-form-container"]}>
      <div
        className={
          `${classes["sliding-form"]}` +
          `${isSignUp ? ` ${classes.signup}` : ""}`
        }
      >
        <div className={classes.form}>
          {<UserForm subtitle="Welcome back!" />}
        </div>

        <div className={classes.form}>
          {<UserForm subtitle="Create your account!" />}
        </div>
      </div>

      <div className={classes.toggle}>
        {isSignUp ? (
          <>
            Already a member?
            <Button onClick={() => onSignUpChange(false)}>Login</Button>
          </>
        ) : (
          <>
            Not on Pinterest yet?
            <Button onClick={() => onSignUpChange(true)}>Sign Up</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SlidingForm;
