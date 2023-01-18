import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';


describe('Testando campo de email', () => {

  it('Testando um componente, caso o email seja VÁLIDO.', () => {;
  render(<ValidEmail email="email@email.com" />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja INVÁLIDO.', () => {;
    render(<ValidEmail email="emailInvalido" />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando caso o email não tenha sido enviado', () => {;
    render(<ValidEmail email="" />);
    const emailNotSend = screen.getByText('Email não enviado');
    expect(emailNotSend).toBeInTheDocument();
  });

  it('Testando se a cor vai ser trocada caso o email seja VÁLIDO', () => {;
    render(<ValidEmail email="pedro@pedro.com" />);
    const corValido = screen.getByText('Email Válido');
    expect(corValido).toBeInTheDocument();
  });

  it('Testando se a classe "valid" e adicionada quando o email e VÁLIDO', () => {;
    render(<ValidEmail email="pedro@pedro.com" />);
    const valid = screen.getByText('Email Válido');
    expect(valid).toHaveClass('valid');
  });

  it('Testando se a classe "inValid" e adicionada quando o email e INVÁLIDO', () => {;
    render(<ValidEmail email="test" />);
    const inValid = screen.getByText('Email Inválido');
    expect(inValid).toHaveClass('invalid');
  });
});