import React, { useEffect, useState } from "react";
import { TodoProps } from "../../@types/todo";
import "./styles.css";

type CriarTodoProps = {
  criarTodo: (todo: TodoProps) => void;
};

const CriarTodo = ({ criarTodo }: CriarTodoProps) => {
  const [getTodo, setTodo] = useState<TodoProps>({ id: 0, titulo: "" });
  const [charCount, setCharCount] = useState(0);
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  useEffect(() => {}, [getTodo]);

  const handleInputChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = evento.target.value;
    if (inputText.length <= 50) {
      setTodo({ ...getTodo, titulo: inputText });
      setCharCount(inputText.length);
    }
  };

  const handleCreateTodo = () => {
    criarTodo(getTodo);
    setMensagemSucesso("Tarefa criada com sucesso!");
    setTodo({ id: 0, titulo: "" }); 
    setCharCount(0); 

    setTimeout(() => {
      setMensagemSucesso(null);
    }, 3000);
  };

  return (
    <div className="criar-todo-container">
      <h1>Crie sua tarefa</h1>
      <div>
        <input
          placeholder="Digite o nome da tarefa (máx. 50 caracteres)"
          value={getTodo.titulo}
          onChange={handleInputChange}
        />
        <small>{charCount}/50 caracteres</small>
        <button onClick={handleCreateTodo}>Criar tarefa</button>
      </div>

      {/* Exibe a mensagem de sucesso, se houver */}
      {mensagemSucesso && <p className="success-message">{mensagemSucesso}</p>}
    </div>
  );
};

export default CriarTodo;
