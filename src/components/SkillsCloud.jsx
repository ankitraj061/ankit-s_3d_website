"use client";

import { Cloud } from "react-icon-cloud";
import { skills } from "@/constants";

const cloudOptions = {
  depth: 1,
  wheelZoom: false,
  imageScale: 2,
  activeCursor: "default",
  tooltip: "native",
  initial: [0.1, -0.1],
  clickToFront: 500,
  tooltipDelay: 0,
  outlineColour: "#0000",
  maxSpeed: 0.04,
  minSpeed: 0.02,
};

const SkillsCloud = () => {
  const icons = skills.map((skill) => (
    <a key={skill.name} title={skill.name}>
      <img
        src={skill.imageUrl}
        alt={skill.name}
        width={42}
        height={42}
        className='rounded-md'
      />
    </a>
  ));

  return (
    <Cloud
      id='skills-icon-cloud'
      containerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
      }}
      options={cloudOptions}
    >
      {icons}
    </Cloud>
  );
};

export default SkillsCloud;
