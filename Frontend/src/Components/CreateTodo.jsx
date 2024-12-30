import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow-md max-w-lg mx-auto">
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Title"
      />
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter Description"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
