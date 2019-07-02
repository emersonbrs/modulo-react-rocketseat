import React, { Component } from "react";

class TechList extends Component {
  /*constructor() {
    this.state = {
      techs: ["Node.js", "ReactJS", "React Native"]
    };
  }*/

  // Para que o componente possa entender a variável de estado passada abaixo
  // é preciso instalar a dependência @babel/plugin-proposal-class-properties -D
  state = {
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
