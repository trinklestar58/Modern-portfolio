import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaJs,
  FaEthereum,
  FaHardHat
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiRedis,
  SiMongodb,
  SiApollographql,
  SiGraphql,
  SiWeb3Dotjs,
  SiRust,
  SiSolidity
} from "react-icons/si";
import {
  TbCurrencySolana,
  TbBrandGolang
} from "react-icons/tb";
import { 
  GiCrossedChains 
} from "react-icons/gi";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Blockchain Development",
        icons: [
          SiSolidity,
          SiWeb3Dotjs,
          FaEthereum,
          TbCurrencySolana,
          FaHardHat,
          SiRust,
          TbBrandGolang,
          GiCrossedChains
        ],
      },
      {
        title: "Web Development",
        icons: [
          SiTypescript,
          FaJs,
          SiNextdotjs,
          SiPostgresql,
          SiTailwindcss,
          SiRedis,
          SiMongodb,
          SiApollographql,
          SiGraphql
        ],
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Blockchain Developer - RMRK",
        stage: "04/2021 - 01/2024",
        overview: "As a blockchain developer, I specialized in utilizing a diverse tech stack that included Next.js, Tailwind CSS, Solidity, Hardhat, GraphQL, PostgreSQL, Web3.js, and Ethers.js for various blockchains such as Polygon, Solana, and Ethereum. My expertise was instrumental in contributing to both front-end and back-end development for blockchain projects. I collaborated with my team using Jira for seamless teamwork and leveraged GitHub for version control. One of the notable projects I contributed to is HeroSwap, a widely adopted platform in the blockchain ecosystem"
      },
      {
        title: "Full Stack Developer - DESO",
        stage: "05/2019 - 03/2021",
        overview: "As the Full Stack developer, I specialized in using Solidity and Rust for various blockchains such as Polygon, Solana, and Ethereum. I worked with multi-chain environments, particularly focusing on the main project of the company, Singular NFT Marketplace, operating across multiple blockchains."
      }
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certified Smart Contract Developer - 101 Blockchains",
        stage: "2019",
      },
      {
        title: "Certified Web 3.0 Professional (CW3P) - Blockchain Council",
        stage: "2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Revolutionary <span className="text-accent">technology</span> fuels groundbreaking innovations.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Over the past 7 years, I've specialized as a blockchain full stack developer, gaining experience through remote roles with two companies and freelance projects. My focus is on pioneering blockchain solutions and reshaping digital landscapes with innovative technology.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={1} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <>
                <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{width: "100%"}}>
                  {
                    item.overview ? item.overview : ""
                  }
                </div>
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
