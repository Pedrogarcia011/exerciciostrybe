import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

it('deve renderizar o componente App', () => {

  // Importamos o teste em si, que chama a helper passando o componente a ser renderizado. Nesse primeiro caso, mostraremos como renderizar a aplicação toda, fazendo um teste geral, depois vamos ver como renderizar um componente específico.


  renderWithRouter(<App />);

  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  });
  expect(homeTitle).toBeInTheDocument();
});



it('deve renderizar o componente Sobre', () => {

  //Com o userEvent (que deve ser importado da @testing-library/user-event), podemos interagir com os elementos da tela (nesse caso, vamos clicar no link Sobre). Depois disso, utilizaremos o history.location.pathname para verificar se estamos na página correta e, por último, checamos se o texto que aparece quando clicamos nesse link no navegador foi encontrado.

  const { history } = renderWithRouter(<App />);// Desestrurura o history para podermos usar suas dependencias e renderiza o App

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });// Verifica se existe esse link na tela

  expect(aboutLink).toBeInTheDocument();// Verifica se este link esta sendo renderizado
  userEvent.click(aboutLink);// Ação de clicar no link

  const { pathname } = history.location;// Desetrutura o nome da rota de history.location
  expect(pathname).toBe('/about');// Verifica se estamos na pagina correta.

  const aboutTitle = screen.getByRole('heading',// Verifica se existe este texto na pagina
    { name: 'Você está na página Sobre' });
  expect(aboutTitle).toBeInTheDocument(); // Verifica se o texto esta sendo renderizado
});


it('deve testar um caminho não existente e a renderização do Not Found', () => {
  // A diferença nesse caso é que utilizamos a função history.push() e passamos como argumento algum link que não existe dentro de nossa aplicação. Depois disso, testamos se ao digitar um caminho para uma página que não existe, o texto que aparece no navegador é encontrado.

  const { history } = renderWithRouter(<App />);

  //Quando utilizamos funções que alteram o estado da aplicação, é recomendado envolvê-las com o act(() => {...}). Isso fará com que o teste simule melhor a forma como o React trabalha no seu navegador.
  act(() => {
    history.push('/pagina/que-nao-existe/');
  })

  const notFoundTitle = screen.getByRole('heading',
    { name: 'Página não encontrada' });
  expect(notFoundTitle).toBeInTheDocument();
});



// Testa apenas o componente About isoladamente.
it('deve renderizar o componente About (apenas componente)', () => {
  renderWithRouter(<About />); // Renderiza o componente About

  const aboutTitle = screen.getByRole('heading',
    { name: 'Você está na página Sobre' });// Verifica se dentro da rota about existe este texto
  expect(aboutTitle).toBeInTheDocument();// Verifica se o texto está sendo renderizado na tela
});