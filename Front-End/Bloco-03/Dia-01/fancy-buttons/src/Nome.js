import React, { Component } from "react";


class Nome extends Component {
    render() {
        const { value, handleChange } = this.props
      return(
        <label>
          Nome
          <input 
            name="nome" // o nome tem que ser igual ao estado
            type="text"
            value={value} // Recebe a props do valor
            onChange={handleChange}// Recebe a props da função genérica
          />
        </label>
      )
    }
}

export default Nome