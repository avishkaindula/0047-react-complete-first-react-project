function Todo(props) {
  // Function name should start with a capital letter.
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
