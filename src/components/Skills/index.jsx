import Image from "next/image";

import LogoHTML from "@/assets/icons8-html.svg";
import LogoCSS from "@/assets/icons8-css3.svg";
import LogoGit from "@/assets/icons8-git.svg";
import LogoPython from "@/assets/icons8-python.svg";
import LogoNextJs from "@/assets/icons8-nextjs.svg";
import LogoReactJs from "@/assets/icons8-react.svg";
import LogoTailwind from "@/assets/icons8-tailwind-css.svg";

const Skills = () => {
  return (
    <div className="pt-64 h-screen">
      <h3 className="text-color-accent md:text-4xl text-2xl font-bold text-center">
        Skills & Tools
      </h3>
      <div className="flex flex-row justify-center py-20 flex-wrap gap-4">
        <a
          href="https://www.w3schools.com/html/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoHTML}
            alt="HTML"
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://www.w3schools.com/css/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoCSS}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://www.w3schools.com/git/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoGit}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://www.w3schools.com/python/default.asp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoPython}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoNextJs}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoReactJs}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
        <a
          href="https://tailwindcss.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-36 w-36 md:h-42 justify-center items-center"
        >
          <Image
            src={LogoTailwind}
            alt="..."
            width={48}
            height={48}
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Skills;
