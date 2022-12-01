import { React, Component} from "react"; 

class Checkbox extends Component {
  render() {
    const { value, handleChange } = this.props // Recebe valor e função como props
    return(
    <label>
      Vai comparecer a conferência?
      <input
        name="vaiComparecer" // O nome tem que ser identico ao estado no Pai
        type="checkbox"
        value={value} // Recebe a props do valor
        onChange={handleChange} // Recebe a props da função
      />
    </label>
    )
  }
}

export default Checkbox