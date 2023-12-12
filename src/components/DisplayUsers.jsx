import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteNewUser = (index) => {
    dispatch(removeUser(index));
  };
  console.log(data);
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <>
            <li key={id}>
              {user}
              <AiFillDelete onClick={() => deleteNewUser(id)} />
            </li>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUsers;
