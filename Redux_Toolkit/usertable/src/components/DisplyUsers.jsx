// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
export default function DisplayUsers() {
  const users = useSelector((state) => state.users); // Assuming state.users is an array of users

  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  // const deleteUser = (user) => {
  //   dispatch(removeUser(user));
  // };
  return (
    <ul>
      {users.map((user, id) => (
        // eslint-disable-next-line react/no-unknown-property
        <li key={id}>
          {user}
          <button className="btn btn-delete" onClick={() => deleteUser(id)}>
            {/* <button className="btn btn-delete" onClick={() => deleteUser(user)}> */}
            <MdDeleteForever size={24} className="text-danger" />
          </button>
          <hr className="m-0 w-25 mx-auto" />
        </li>
      ))}
    </ul>
  );
}
