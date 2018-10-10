import React, { Component } from "react";
// import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import mydata from "../data.json";
import SkillCard from "../components/SkillCard";
import ArrowIcon from "../components/ArrowIcon";
import {Link, Element } from "react-scroll";

class SkillSection extends Component {
  render() {
    return (
      <div style={{color:this.props.color,backgroundColor:this.props.bgcolor}}>
     
       <Element name="skill" className="element" />
      <Fullpage className="third">
        <h3>{mydata.sections[1].title}</h3>
        <div className="cards-wrapper">
          {mydata.sections[1].items.map(eachskill => {
            return <SkillCard skill={eachskill} />;
          })}
        </div>
      </Fullpage>
     
     <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          delay={0}
        >
        <ArrowIcon
          icon='fa fa-sort-up'
          onClick={() => {
            console.log("aaaa");
          }}
        />
       </Link>
      
      
     
    
       
       
     
      
      
      
      </div>
    );
  }
}
export default SkillSection;
