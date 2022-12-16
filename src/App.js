import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo />
      {/* This is a custom element (a custom component) */}
      {/* In order to differentiate these custom elements with */}
      {/* Built in html elements, we need to create this in */}
      {/* capital letters. */}
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
