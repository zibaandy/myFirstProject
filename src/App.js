import React, { Component } from "react";
import mydata from "./data.json";
import "./App.css";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";

import SnowStorm from "react-snowstorm";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: mydata.color.textColor,

      backgroundColor1: mydata.color.backgroundColor[0].bgColor,
      backgroundColor2: mydata.color.backgroundColor[1].bgColor,
      backgroundColor3: mydata.color.backgroundColor[2].bgColor
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.textColor === "blue") {
      this.setState({
        textColor: "rgb(73, 124, 247)",
        backgroundColor1:"rgba(250, 250, 250, 1)",
        backgroundColor2:"rgba(242, 242, 242, 0.85)",
        backgroundColor3:"rgba(250, 250, 250, 1)"
      })};
      if (this.state.textColor === "rgb(73, 124, 247)") {
        this.setState({
          textColor: "rgb(73,174, 227)",
          backgroundColor1:"rgba(242, 242, 242, 0.85)",
          backgroundColor2:"rgba(250, 252, 250, 1)",
          backgroundColor3:"rgba(241, 241, 241, 1)"
        })};
        if (this.state.textColor === "rgb(73,174, 227)") {
          this.setState({
            textColor: "white",
            backgroundColor1:"rgba(0,0,255,0.5)",
            backgroundColor2:"blue",
            backgroundColor3:"rgba(21,21, 252, 0.2)"
          })};
          if (this.state.textColor === "white") {
            this.setState({
              textColor: "blue",
              backgroundColor1:"rgba(252, 255, 252, 0.85)",
              backgroundColor2:"rgba(244, 254, 252, 0.85)",
              backgroundColor3:"rgba(252, 252, 242, 0.85)"
            })};
    // this.setState({
    //   textColor: this.state.textColor === "blue" ? "rgb(73, 104, 247)" : "rgb(73,174, 227)",
      // backgroundColor1:
      //   this.state.backgroundColor1 === "rgb(173, 244, 247)"
      //     ? "rgb(40, 82, 93)"
      //     : "rgb(173, 244, 247)",
      // backgroundColor2:
      //   this.state.backgroundColor2 === "rgba(201, 228, 167, 1)"
      //     ? "rgba(01, 0, 126, 0.87)"
      //     : "rgba(01, 121, 122, 0.87)",
      // backgroundColor3:
      //   this.state.backgroundColor3 === " rgb(40, 82, 93)"
      //     ? "rgb(173, 244, 247)"
      //     : "rgb(40, 82, 93)"
    // });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor2}
          func={this.changeColor}
        />

        {/* <style  dangerouslySetInnerHTML={{__html: `
    .___snowStorm___{ color:white}
 `}} /> */}
        <SnowStorm snowColor={this.state.textColor} />

        <TitlesSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor1}
        />
        
        <AboutSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor2}
        />
        <SkillSection
          color={this.state.textColor}
          bgcolor={this.state.backgroundColor3}
        />
        
       
      </div>
    );
  }
}

export default App;
