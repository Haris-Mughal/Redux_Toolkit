// eslint-disable-next-line no-unused-vars
import React from "react";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";

export default function AddUser() {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => addNewUser(fakeUserData())}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
