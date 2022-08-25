/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
