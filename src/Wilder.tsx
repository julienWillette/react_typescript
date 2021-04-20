import React from 'react';
import blank_profile from './blank-profile-picture-female.png';
import Skill from './Skill';
import { Card, List } from './styles/elements';

export type WilderProps = {
  city?: string;
  justAdded: boolean;
  name: string;
  skills: SkillProps[];
};
export type SkillProps = {
  _id: string;
  title: string;
  votes: number;
};

function Wilder({ city, justAdded, name, skills }: WilderProps) {
  return (
    <Card newCard={justAdded}>
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