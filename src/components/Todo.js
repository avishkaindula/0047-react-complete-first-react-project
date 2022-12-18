function Todo(props) {
  // Function name should start with a capital letter.

  function deleteHandler() {
    console.log("Clicked!");
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      {/* This is how we access the values of attributes we */}
      {/* pass to the component tags on App.js*/}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {/* We don't add () to deleteHandler here. */}
          {/* Because we only wanna execute deleteHandler function */}
          {/* when the button is clicked. */}
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
