/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h3 className="text-center">10</h3>
                  <h5 class="card-title">Total Course</h5>
                </div>
                {/* <p class="card-text">Total Course</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body d-flex justify-content-center">
                <div>
                  <h3 className="text-center">12</h3>
                  <h5 class="card-title">Total Category</h5>
                </div>
                {/* <p class="card-text">Total Course</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
