import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      {/* This is a custom element (a custom component) */}
      {/* In order to differentiate these custom elements with */}
      {/* Built in html elements, we need to create this in */}
      {/* capital letters. */}
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
