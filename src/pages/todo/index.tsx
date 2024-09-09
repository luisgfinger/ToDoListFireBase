import React, { useContext, useState } from "react";
import TodoList from "../../components/todolist";
import CriarTodo from "../../components/criarTodo";
import { TodoProps } from "../../@types/todo";
import { ContextoTodo } from "../../context/contextTodo";
import "./styles.css";

enum TodoPages {
  "criarTodo" = "criarTodo",
  "listarTodo" = "listarTodo",
}

const Todo = () => {
  const todos = useContext(ContextoTodo);
  const [getTodos, setTodos] = useState<TodoProps[]>(todos);

  const [getPaginaAtual, setPaginaAtual] = useState<TodoPages>(
    TodoPages.listarTodo
  );

  const renderizarPagina = () => {
    switch (getPaginaAtual) {
      case TodoPages.criarTodo:
        return (
          <CriarTodo
            criarTodo={(novoTodo: TodoProps) => {
              const id: number = getTodos.length + 1;
              novoTodo.id = id;
              const tmpTodos: TodoProps[] = [...getTodos, novoTodo];
              setTodos(tmpTodos);
            }}
          />
        );
      case TodoPages.listarTodo:
        return (
          <TodoList
            getTodos={getTodos}
            setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)}
          />
        );
      default:
        return (
          <TodoList
            getTodos={getTodos}
            setTodos={(novaLista: TodoProps[]) => setTodos(novaLista)}
          />
        );
    }
  };

  const renderizarBotoes = () => (
    <div>
      <button onClick={() => setPaginaAtual(TodoPages.listarTodo)}>
        Lista de tarefas
      </button>
      <button onClick={() => setPaginaAtual(TodoPages.criarTodo)}>
        Criar tarefa
      </button>
    </div>
  );

  return (
    <div className="todo-container">
      {renderizarBotoes()}
      {renderizarPagina()}
    </div>
  );
};

export default Todo;
