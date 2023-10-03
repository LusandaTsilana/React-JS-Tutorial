export const Task = (props) => {
  return (
    <div
      id="list"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.complete(props.id)}>Completed</button>
      <button onClick={() => props.deletetask(props.id)}>Delete</button>
    </div>
  );
};
