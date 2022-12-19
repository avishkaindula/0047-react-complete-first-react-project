import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Function name should start with a capital letter.
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // UseState always returns an array with two elements
  // First element holds the value of the useState
  // So "false" is the value of the current initial state.
  // we can assign that value to modalIsOpen
  // setModalIsOpen is a function that allows us to change that value.
  // Whenever we call this state changing function, react will re-execute
  // the component function which this state belongs and update what's
  // rendered on the screen.

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
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
      {/* {modalIsOpen ? <Modal /> : null} */}
      {/* This is a ternary expression */}
      {/* It means if modalIsOpen = true; then show <Modal /> */}
      {/* else show nothing. (null) */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/* This means if modalIsOpen = true and Modal component exists, */}
      {/* return the second value. */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
