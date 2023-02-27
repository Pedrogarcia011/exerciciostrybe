import { useState } from "react";

function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [modules, setModules] = useState()
    return ( 
      <form>
        <h1>Formulario Ex-Fixação</h1>
        <label>
          Nome Completo
          <input
            type="text"
            id="name"
            value={ name }
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <br />

        <label>
          Idade
          <input
            type="number"
            id="age"
            value={ age }
            onChange={({ target }) => setAge(target.value)}
          />
        </label>

        <br />

        <label>
          Cidade
          <input
            type="text"
            id="city"
            value={ city }
            onChange={({ target }) => setCity(target.value)}
          />
        </label>

        <br />

        <label htmlFor="favorite-fundamentos">
          Fundamentos
          <input
            id="favorite-fundamentos"
            name="fav_language"
            value="Fundamentos"
            type="radio"
            checked={ modules === 'Fundamentos'}
            onChange={({ target }) => setModules(target.value)}
          />
        </label>
        <br />
        <label for="favorite-front">
          Front-end
          <input
            id="favorite-front"
            name="fav_language"
            value="Front-end"
            type="radio"
            checked={ modules === 'Front-end'}
            onChange={({ target }) => setModules(target.value)}
          />
        </label>
        <br />
        <label for="favorite-back">
          Back-end
          <input
            id="favorite-back"
            name="fav_language"
            value="Back-end"
            type="radio"
            checked={ modules === 'Back-end'}
            onChange={({ target }) => setModules(target.value)}
          />
        </label>
        <br />
        <label for="favorite-ciencie">
          Ciência da Computação
          <input
            id="favorite-ciencie"
            name="fav_language"
            value="Ciência da Computação"
            type="radio"
            checked={ modules === 'Ciência da Computação'}
            onChange={({ target }) => setModules(target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
}

export default Form;
