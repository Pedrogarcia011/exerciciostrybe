// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());// faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. Isso é bem útil para que não haja interferência entre um teste e outro.

//Simula o resultado que e esperado da Api.
it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  //Espiona a chamada da função fetch do objeto nativo global
  jest.spyOn(global, 'fetch');
  //Quando a função fetch for chamada, em vez de fazer uma requisição a uma API externa, será chamado nosso mock. Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria. Primeiro retornamos um objeto que contém a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  // É importante termos o async em it('fetch joke', async () => {, para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();// Espera que otexto seja renderizado na tela
  expect(global.fetch).toHaveBeenCalledTimes(1);// Espera que a função fetch seja chamada 1 vez
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});