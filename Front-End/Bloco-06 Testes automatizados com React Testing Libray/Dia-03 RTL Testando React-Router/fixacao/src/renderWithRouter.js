// src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';// Vamos importar o Router que servirá para termos acesso ao histórico criado pelo createMemoryHistory
import { createMemoryHistory } from 'history';// Vamos importar o createMemoryHistory que irá criar nosso histórico em memória durante os testes
import { render } from '@testing-library/react';// Vamos importar o render, assim teremos acesso a todos os seletores que ele possui como getByText ou getByRole


//Feitas as importações, vamos criar nossa função helper chamada renderWithRouter e exportá-la como default
const renderWithRouter = (component) => {//Recebemos em nossa função renderWithRouter um parâmetro component, que é o componente que desejamos renderizar em nossos testes
  const history = createMemoryHistory();// Utilizamos a função createMemoryHistory para criar uma variável history que armazenará nosso histórico


  
  //Todas as propriedades retornadas pelo método render também serão retornadas em nosso objeto, pois estamos usando a Spread Syntax. Além disso, também é retornada a nossa constante history. Repare que a função render recebe como parâmetro o componente <Router />.O <Router />, por sua vez, recebe como props history a variável que também se chama history criada no passo 4. Além disso o parâmetro recebido component é passado como children para o <Router />. Dessa forma, conseguimos renderizar em nossos testes o componente desejado encapsulado pelo <Router />

  return ({
    ...render(<Router history={ history }>{component}</Router>), history,
  });
};
export default renderWithRouter;