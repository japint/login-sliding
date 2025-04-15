import React, { useState } from "react";
import cx from "classnames";
import pinterestLogo from "/images/pinterest-3.svg";
import Button from "../components/Button/Button";
import Modal from "../components/Modals/Modal";
import SlidingForm from "../components/SlidingForm/SlidingForm";

const FORM_TYPE = {
  Login: "login",
  SignIn: "signin",
};

// Home
const Home = () => {
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Login</Button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <img src={pinterestLogo} alt="Logo" width={20} height={20} />
          <h2>Welcome to Pinterest</h2>
          <SlidingForm isSignUp={isSignUp} onSignUpChange={setIsSignUp} />
        </Modal>
      )}
    </>
  );
};

export default Home;
