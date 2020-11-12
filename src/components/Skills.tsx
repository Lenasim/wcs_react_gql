import React from "react";
import PropTypes from "prop-types";
import { Badge } from "../styles/elements";

export interface SkillProps {
  id?: string;
  title: string;
  votes: number;
}

function Skills({ title, votes }: SkillProps): JSX.Element {
  return (
    <li>
      {title}
      <Badge votes={votes}>{votes}</Badge>
    </li>
  );
}

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Skills;
