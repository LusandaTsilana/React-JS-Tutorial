import { useToggle } from "../useToggle";

export const About = () => {
  const [state, toggle] = useToggle();
  const [state2, toggle2] = useToggle();

  return (
    <div>
      <h1>About Page</h1>

      <button onClick={toggle}>{state ? "Hide" : "Show"}</button>
      {state && <h2>TADA !!</h2>}

      <button onClick={toggle2}>{state2 ? "Hide" : "Show"}</button>
      {state2 && <h2>TADA !!</h2>}
    </div>
  );
};
