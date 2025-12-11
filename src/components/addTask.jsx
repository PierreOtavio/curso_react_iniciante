import { useState } from "react";
import Input from "./Input";

function AddTasks({ adicionarTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        id="title"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></Input>
      <Input
        type="text"
        id="desc"
        placeholder="Digite a descrição da tarefa"
        value={desc}
        onChange={(event) => {
          setDesc(event.target.value);
        }}
      ></Input>
      <button
        onClick={() => {
          if (!title.trim() || !desc.trim()) {
            return alert("Preenche a buceta do trem sô!");
          }
          adicionarTask(title, desc), setDesc(""), setTitle("");
        }}
        className="bg-slate-500 text-white px- py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
