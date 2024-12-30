import { useState, useEffect } from "react";
import { CreateTodo } from "./Components/CreateTodo";
import { Todos } from "./Components/Todos";
import "./index.css"; 


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8">
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}
export default App;
