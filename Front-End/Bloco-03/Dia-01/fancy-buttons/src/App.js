import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state` */
    this.state = {
      numeroDeCliques: 0,
    };
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React */
    this.setState((element) => ({
      numeroDeCliques: element.numeroDeCliques+1
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return <button onClick={this.handleClick}>{numeroDeCliques}</button>
  }
}

export default App;