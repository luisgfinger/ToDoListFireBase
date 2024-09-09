import React, { useContext, useEffect } from "react";
import './styles.css'

const Home = () => {

  return (
    <div className="home-container">
      <h1>O que é um Todo List?</h1>
      <p>
        Um Todo List é uma ferramenta simples, mas poderosa, para gerenciar
        tarefas do dia a dia. Ele permite que você crie uma lista de afazeres
        (também chamadas de "todos"), que pode incluir tarefas pessoais,
        profissionais, ou qualquer outro tipo de atividade que precise ser
        organizada.
      </p>
      <h2>Como funciona?</h2>
      <p>
        O funcionamento de um Todo List é bastante simples. Você cria uma nova
        tarefa inserindo o título e, opcionalmente, mais detalhes. Depois disso,
        a tarefa é adicionada à lista de tarefas pendentes.
      </p>
      <p>
        Quando você concluir uma tarefa, basta marcá-la como concluída, e ela
        será removida da lista ou movida para uma seção de tarefas concluídas.
        Isso ajuda a manter o controle do que foi feito e do que ainda precisa
        ser feito.
      </p>
    </div>
  );
};

export default Home;
