import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  /*constructor() {
    this.state = {
      techs: ["Node.js", "ReactJS", "React Native"]
    };
  }*/

  // Para que o componente possa entender a variável de estado passada abaixo
  // é preciso instalar a dependência @babel/plugin-proposal-class-properties -D
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  handleInputChange = event => {
    this.setState({ newTech: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); // Previne o comportamento padrão do event
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      // Tag sem nome: Fragment (<>)
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;
