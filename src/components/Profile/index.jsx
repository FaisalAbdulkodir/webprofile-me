"use client";

import Image from "next/image";
import Gambar from "@/assets/img.png";
import Link from "next/link";
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

const Profile = () => {
  return (
    <div className="w-full h-screen gap-1 text-color-primary flex flex-col justify-center items-center text-center p-5">
      <div className="flex flex-row gap-2">
        <h3 className="text-2xl md:text-4xl font-bold ">Hi, I'm</h3>
        <h3 className="text-2xl md:text-4xl font-bold text-color-accent">
          Faisal Abdullah
        </h3>
      </div>
      <h3 className="font-bold md:text-2xl text-xl">Website Developer</h3>
      <h1 className="font-bold  text-lg md:text-xl text-color-secondary ">
        A person who loves buggy code.
      </h1>
      <Image
        src={Gambar}
        alt="..."
        width={250}
        height={250}
        className="mt-4 bg-color-accent object-cover"
      />
      <div className="py-2 flex flex-wrap gap-4 ">
        <Link
          href="https://github.com/FaisalAbdulkodir"
          className="hover:scale-110 transition-all duration-300 ease-in-out p-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={32} className="" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/faisal-abdullah-b049a5240/"
          className="hover:scale-110 transition-all duration-300 ease-in-out p-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={32} />
        </Link>
        <Link
          href="https://www.instagram.com/faisalabdllh14120/"
          className="hover:scale-110 transition-all duration-300 ease-in-out p-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={32} />
        </Link>
        <Link
          href="https://www.facebook.com/faisal.abdullah.18400700?locale=id_ID"
          className="hover:scale-110 transition-all duration-300 ease-in-out p-2 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookLogo size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Profile;
