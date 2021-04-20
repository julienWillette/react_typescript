import React from "react";
import { Badge } from "./styles/elements";

export type SkillProps = {
  _id: string;
  title: string;
  votes: number;
};

const Skill = ({ title, votes }: SkillProps): JSX.Element => {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
};

export default Skill;
