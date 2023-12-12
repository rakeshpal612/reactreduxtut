import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUser = () => {
    dispatch(deleteUsers());
  };
  return (
    <div className="btn-delete btn" onClick={() => deleteAllUser()}>
      DeleteAllUser
    </div>
  );
};
