import React, { Component } from "react";

class Button extends React.Component {

  state = {
    numeroDeClik1: 0,
    numeroDeClik2: 0,
    numeroDeClik3: 0,
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClik1: estadoAnterior.numeroDeClik1 + 1
    }))
  }

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClik2: estadoAnterior.numeroDeClik2 + 1
    }))
  }

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeClik3: estadoAnterior.numeroDeClik3 + 1
    }))
  }

render () {
  const { numeroDeClik1, numeroDeClik2, numeroDeClik3 } = this.state;
  return (
    <>
    <button onClick={this.handleClick}> { numeroDeClik1 } </button>
    <button onClick={this.handleClick2}> { numeroDeClik2 } </button>
    <button onClick={this.handleClick3}> { numeroDeClik3 } </button>
    </>
  )
}
}

export default Button