// eslint-disable-next-line no-unused-vars
import React from "react";
import AddUser from "./AddUser";
import DeleteAllUsers from "./DeleteAllUsers";
import DisplyUsers from "./DisplyUsers";

export default function UserDetails() {
  return (
    <div>
      <AddUser />
      <DisplyUsers />
      <DeleteAllUsers />
    </div>
  );
}
