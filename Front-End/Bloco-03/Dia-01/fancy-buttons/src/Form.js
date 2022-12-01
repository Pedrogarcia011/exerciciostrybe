import React, { Component } from "react";
import './Form.css'
import Estadofavorito from "./EstadoFavorito";
import Nome from "./Nome"
import Email from "./Email"
import Idade from "./Idade";
import Checkbox from "./Checkbox";

class Form extends Component {

    constructor() {
      super()

      this.state = { // Adicionando os nomes dos estados que vou ter
        estadoFavorito: '',
        nome: '',
        email: '',
        idade: '',
        vaiComparecer: false
      }
    }

    // Criando um Handle genérico
    handleChange = ({ target }) => {
      const { name } = target
      const value = target.type === 'checkbox' ? target.checked :target.value

      this.setState({
        [name]: value
      })
    }

    render() {
        return (
            <div>
              <h1>Meu Form</h1>
              <form className="form">

                <Estadofavorito 
                  value={this.state.estadoFavorito} // Passa o valor como props
                  handleChange={this.handleChange} // Passa a função como props
                />

                <Email 
                  value={this.state.email} // Passa o valor como props
                  handleChange={this.handleChange} // Passa a função como props
                />

                < Nome 
                  value={this.state.nome} // Passa o valor como props
                  handleChange={this.handleChange} // Passa a função como props
                />

                <Idade 
                  value={this.state.idade} // Passa o valor como props
                  handleChange={this.handleChange} // Passa a função como props
                />

                <Checkbox 
                  value={this.state.vaiComparecer} // Passa o valor como props
                  handleChange={this.handleChange} // Passa a função como props
                />
                
              </form>
            </div>
        )
    }
}

export default Form