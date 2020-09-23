import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Social Network</h1>
          <p className="lead">
            Create a profile, share posts, and connect with the community!
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              {" "}
              Register{" "}
            </Link>
            <Link to="/login" className="btn btn">
              {" "}
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
