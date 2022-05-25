import React from "react";
import html from "../../assets/logo/html5-brands.svg";
import css from "../../assets/logo/css3-brands.svg";
import bootstrap from "../../assets/logo/bootstrap-brands.svg";
import tailwind from "../../assets/logo/tailwindcss.svg";
import js from "../../assets/logo/js-square-brands.svg";
import reactSvg from "../../assets/logo/react.svg";
import reactRouter from "../../assets/logo/react-router.svg";
import node from "../../assets/logo/node-brands.svg";
import mongodb from "../../assets/logo/database-solid.svg";
import github from "../../assets/logo/github-square-brands.svg";
import netlify from "../../assets/logo/netlify-seeklogo.com.svg";
import figma from "../../assets/logo/figma-brands.svg";
import firebase from "../../assets/logo/firebase-seeklogo.com.svg";
import heroku from "../../assets/logo/heroku-icon.svg";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section>
      <h4 className="text-center text-3xl my-12 font-semibold">Skills</h4>
      <div className="grid grid-cols-1 gap-y-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 md:max-w-4xl mx-auto">
        <Skill logo={html} name="html" />
        <Skill logo={css} name="css" />
        <Skill logo={bootstrap} name="bootstrap" />
        <Skill logo={tailwind} name="tailwind" />
        <Skill logo={js} name="javascript" />
        <Skill logo={reactSvg} name="react" />
        <Skill logo={reactRouter} name="react router" />
        <Skill logo={node} name="node" />
        <Skill logo={mongodb} name="mongodb" />
        <Skill logo={github} name="github" />
        <Skill logo={netlify} name="netlify" />
        <Skill logo={figma} name="figma" />
        <Skill logo={firebase} name="firebase" />
        <Skill logo={heroku} name="heroku" />
      </div>
    </section>
  );
};

export default Skills;
