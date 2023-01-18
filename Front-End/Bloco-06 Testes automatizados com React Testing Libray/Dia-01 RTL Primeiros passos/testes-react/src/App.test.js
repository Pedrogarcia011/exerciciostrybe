import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se ao clicar no botão vai ser renderizado o valor do input na tela', () => {
  render(<App />)
  //Acessa elemento na tela

  const textEmail = screen.getByTestId('id-email-user');//Acessa elemento atraves do data-testing
  const button = screen.getByTestId('id-send');//acessa o elemento atraves do data-testing
  const inputEmail = screen.getByLabelText('Email');//Acessa o elemento atraves do texto da label

  //Interagit com elementos
  userEvent.type(inputEmail, 'email@email.com');//Simula um teste no input para verificar o email digitado
  userEvent.click(button);//Testa se o botão e clicado

  //Desenvolve testes
  expect(textEmail).toBeInTheDocument('Valor:');//Testa se o valor do email esta sendo renderizado na tela
  expect(inputEmail).toHaveValue('')//verifica se o input esta vazio pois quando clicar no botão, o input será esvaziado
  expect(textEmail).toHaveTextContent(`Valor: ${'email@email.com'}`);//Testa se esta exibindo o texto esperado e garante que o elemento esta sendo renderizado corretamente

})



/* test('Verifica a existencia do campo email', () => {
  render(<App />);
  const emailexistence = screen.getByLabelText('Email');// Verifica se existe alguma label com o texto enviar
  expect(emailexistence).toBeInTheDocument();// Verifica se esse input esta sendo exibido na tela
  expect(emailexistence).toHaveProperty('type', 'email');// Verifica se este input e do tipo email
});

 test('Verificando se existe dois botão', () => {
   render(<App />);
   const btn = screen.getAllByRole('button');//Procura pelo elemento button na aplicação
   expect(btn).toHaveLength(2);// Verifica se existem dois elementos do tipo button
 });

test('Verificando se existe um botao de enviar', () => {
  render(<App />);
  const buttonid = screen.getByTestId('id-send');//Procura pelo elemento com data testing
  expect(buttonid).toBeInTheDocument();// Verifica se esta sendo renderizado
  expect(buttonid).toHaveProperty('type', 'button');// Verifica se este elemento e um botao
  expect(buttonid).toHaveValue('Enviar');// Verifica se esse botao possui o texto "Enviar"
}); */
