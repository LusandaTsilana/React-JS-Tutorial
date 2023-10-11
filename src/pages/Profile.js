import { ChangeProfile } from "./changeprofile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Profile</h1>
      Name: {username} <ChangeProfile />
    </div>
  );
};
