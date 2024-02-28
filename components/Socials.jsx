import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailStarLine
} from "react-icons/ri";

export const socialData = [
  {
    name: "jackryanmoes92011@gmail.com",
    link: "#",
    Icon: RiMailStarLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jackmoes8980241bbb",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/innotech0926",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
