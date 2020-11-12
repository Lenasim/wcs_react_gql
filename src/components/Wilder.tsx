import React from "react";
import { Card, List } from "../styles/elements";
import Skills, { SkillProps } from "./Skills";

export interface WilderTypes {
  id?: string;
  city: string;
  name: string;
  skills: SkillProps[];
}

function Wilder({ city, name, skills }: WilderTypes): JSX.Element {
  return (
    <Card newCard={false}>
      <img src="/image.png" alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skills key={skill.id} title={skill.title} votes={skill.votes} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
