import React from "react";

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
            <a href="register.html" className="btn btn-primary">
              {" "}
              Register{" "}
            </a>
            <a href="login.html" className="btn btn">
              {" "}
              Login{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
