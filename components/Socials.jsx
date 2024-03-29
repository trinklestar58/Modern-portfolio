import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailStarLine
} from "react-icons/ri";

export const socialData = [
  {
    name: "jackryanmoes11@gmail.com",
    link: "#",
    Icon: RiMailStarLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jack-moes-b80a322b5",
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
          target={social.link === "#" ? "" : "_blank"}
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
