import React from "react";
import introText from "./IntroText";
import {Link} from 'react-router-dom'
import getAPI from "../Api";

export default function Welcome() {
  return (
    <>
      <div>
        <p>{introText}</p>
      </div>
      <Link to="/Create Account" className="btn btn-primary">SignUp</Link>
      <p>Or, already have an account?</p>
    </>
  );
}
