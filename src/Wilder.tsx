import React from "react";
import blank_profile from "./blank-profile-picture-female.png";
import Skill, { SkillProps } from "./Skill";
import { Card, List } from "./styles/elements";

export type WilderProps = {
  city?: string;
  name: string;
  skills: SkillProps[];
};

function Wilder({ city, name, skills }: WilderProps) {
  return (
    <Card newCard>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill._id} {...skill} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
