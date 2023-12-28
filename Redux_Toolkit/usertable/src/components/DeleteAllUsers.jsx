// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch } from "react-redux";
// import { deleteAllUsers } from "../store/slices/UserSlice"; //after making 'store', we import it from store below...
import { deleteAllUsers } from "../store/actions";

export default function DeleteAllUsers() {
  const dispatch = useDispatch();

  const deleteAll = () => {
    // dispatch(deleteAllUsers());
    dispatch(deleteAllUsers());
  };

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-danger" onClick={() => deleteAll()}>
              Delete All Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
