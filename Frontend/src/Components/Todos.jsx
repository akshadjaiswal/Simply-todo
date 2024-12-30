export function Todos({ todos }) {
  return (
    <div className="flex flex-col items-center bg-white p-4">
      {todos.map((todo, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-200 rounded-md shadow-sm p-4 mb-4 w-full max-w-md"
        >
          <h1 className="text-lg font-semibold text-gray-800">{todo.title}</h1>
          <p className="text-gray-600 mb-2">{todo.description}</p>
          <button
            className={`${
              todo.completed
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-3 py-1 rounded-md transition`}
          >
            {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
