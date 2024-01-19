const Todo = (props) => {
  return (
    <div>
      <h1>{props.prop.title}</h1>
      <h2>{props.prop.description}</h2>
    </div>
  );
};

export default Todo;
