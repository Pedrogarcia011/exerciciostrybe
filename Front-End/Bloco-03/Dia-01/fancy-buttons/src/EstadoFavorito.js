import React, { Component } from "react";


class Estadofavorito extends Component {
    render() {
        const { value, handleChange } = this.props // Recebe a função e o valor como props
      return(
    <label>
      Digite qual e o estado favorito
      <textarea 
        name="estadoFavorito" 
        value={value} // Recebe a props do valor
        onChange={handleChange} // Recebe a props da função
      />
    </label>
      )
    }
}

export default Estadofavorito