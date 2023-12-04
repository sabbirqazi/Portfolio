import Link from "next/link";

import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
const icons = [
  {
    path: "https://www.linkedin.com/in/qazi-md-sabbir-ahmed/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/sabbirqazi",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={icon.index} target="_blank">
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
