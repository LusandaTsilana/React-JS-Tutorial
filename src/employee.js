export const Employee = (props) => {
  return (
    <div>
      <p> {props.occupation}</p>
      <p> {props.salary} </p>
      <p> {props.company}</p>
    </div>
  );
};
