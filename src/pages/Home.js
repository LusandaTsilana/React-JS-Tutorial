import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <h1>
      Hi, {username}
      <div>Welcome back to my Youtube Channel</div>
    </h1>
  );
};
