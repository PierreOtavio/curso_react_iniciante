import React, { useState, useEffect } from "react";
import AddTasks from "./components/addTask";
import Tasks from "./components/tasks";
import { v4 } from "uuid";
import TaskManager from "./components/TaskManager";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function buscar() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    }
    buscar();
  }, []);

  function markTaskAsComplete(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTask);
  }

  function deleteTask(taskId) {
    const taskDeleted = tasks.filter((task) => task.id !== taskId);
    setTasks(taskDeleted);
  }

  function adicionarTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <TaskManager>Gerenciador de Tarefas</TaskManager>
        <AddTasks adicionarTask={adicionarTask} />
        <Tasks
          tasks={tasks}
          markTaskAsComplete={markTaskAsComplete}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
