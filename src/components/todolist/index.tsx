import React, { useEffect } from "react";
import "./styles.css";
import { TodoProps } from "../../@types/todo";

type TodoListProps = {
  getTodos: TodoProps[];
  setTodos: (todos: TodoProps[]) => void;
};

const TodoList = ({ getTodos, setTodos }: TodoListProps) => {
  useEffect(() => {}, [getTodos]);

  const finalizaTodo = (id: number) => {
    const tmpTodos: TodoProps[] = getTodos.filter(
      (todo: TodoProps) => todo.id !== id
    );
    setTodos(tmpTodos);
  };

  return (
    <div className="todo-list-container">
      <h1>Lista de Tarefas</h1>
      {getTodos.length === 0 ? (
        <p>Não há tarefas no momento. Crie uma nova tarefa para começar!</p>
      ) : (
        <ul>
          {getTodos.map((todo: TodoProps) => (
            <li key={todo.id}>
              <input type="checkbox" onClick={() => finalizaTodo(todo.id)} />{" "}
              {todo.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
