// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <div className="text-center">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>List of Users Details</h1>
            </div>
          </div>
        </div>
      </div>
      <UserDetails />
    </div>
  );
};

export default App;
