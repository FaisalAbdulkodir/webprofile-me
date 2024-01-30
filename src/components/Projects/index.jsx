"use client";

import Image from "next/image";
import Buku from "@/assets/buku.png";
import Sag from "@/assets/sag.png";
import Emosi from "@/assets/emo.jpg";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Projects = () => {
  return (
    <div className="pt-40">
      <h3 className="text-center text-2xl md:text-4xl font-bold text-color-accent ">
        Projects
      </h3>
      <div className="flex pt-20 justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-4 text-center">
          <div className="cursor-pointer w-72 h-96 bg-color-accent mx-auto overflow-hidden shadow-xl flex flex-col border-4 border-color-accent hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="h-4/5 w-full flex-1 bg-color-primary">
              <Image
                src={Buku}
                alt="..."
                width={250}
                height={250}
                className="object-cover h-full w-full object-top"
              />
            </div>
            <div className="h-1/5 w-full">
              <h1 className="font-bold text-lg md:text-xl text-color-dark h-full p-3">
                Dynamic Correlation using GARCH Model
              </h1>
            </div>
          </div>
          <div className="cursor-pointer w-72 h-96 bg-color-accent mx-auto overflow-hidden shadow-xl flex flex-col border-4 border-color-accent hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="h-4/5 w-full flex-1 bg-color-primary">
              <Image
                src={Emosi}
                alt="..."
                width={250}
                height={250}
                className="object-cover h-full w-full object-top"
              />
            </div>
            <div className="h-1/5 w-full">
              <h1 className="font-bold text-lg md:text-xl text-color-dark h-full p-3">
                Emotion Detection on Text Using Ensemble Model
              </h1>
            </div>
          </div>
          <div className="cursor-pointer w-72 h-96 bg-color-accent mx-auto overflow-hidden shadow-xl flex flex-col border-4 border-color-accent hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="h-4/5 w-full flex-1 bg-color-primary">
              <Image
                src={Sag}
                alt="..."
                width={250}
                height={250}
                className="object-cover h-full w-full object-top"
              />
            </div>
            <div className="h-1/5 w-full">
              <h1 className="font-bold text-lg md:text-xl text-color-dark h-full p-3">
                UI & UX Improvements on Dikpora Dompu Website
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
