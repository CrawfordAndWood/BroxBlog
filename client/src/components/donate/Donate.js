import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

const Donate = () => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="bb-donate">
        <h1>Donation</h1>
        <p>
          Donate to my Patreon to support my research, or consider a
          subscription!
        </p>
      </div>{" "}
    </Fragment>
  );
};

export default Donate;
