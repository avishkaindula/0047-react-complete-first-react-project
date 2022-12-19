function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      {/* <button className="btn btn--alt" onClick={props.onCancel}> */}
      <button className="btn btn--alt" onClick={cancelHandler}>
      {/* We can use either of this approaches. */}
      {/* We can either directly use props.onCancel as the value of onClick */}
      {/* or we can add props.onCancel to a function called cancelHandler */}
      {/* and assign that function as the value of onClick  */}
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
