import React, { Component } from "react";


class Email extends Component {
    render() {
        const {value, handleChange} = this.props // Recebe a função e o valor em props
      return(
        <label>
          Email
          <input 
            name="email" // o nome tem que ser igual ao estado
            type="email"
            value={value} // Recebe a props valor
            onChange={handleChange}// Recebe a função emformato de props
          />
        </label>
      )
    }
}

export default Email