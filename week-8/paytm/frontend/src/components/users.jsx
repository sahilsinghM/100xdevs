import React from "react";
// import { useRecoilValue } from "recoil";
// import { users } from "../store/atoms/users";
import { User } from "./user";

export const Users = ({ usersArray }) => {
  //   const usersList = useRecoilValue(users);
  //   console.log(users);
  return (
    // <>{usersArray}</>
    <div>
      {usersArray.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
