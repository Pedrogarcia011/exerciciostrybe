import React, { Component } from "react";


class Idade extends Component {
  render() {
    const { value, handleChange } = this.props // Recebe valor e função como props
    return(
      <label>
        Idade
        <input 
          name="idade" // o nome tem que ser igual ao estado
          type="number"
          value={value} // Recebe a props do valor
          onChange={handleChange}// Recebe a props da função
        />
      </label>
    )
  }
}

export default Idade