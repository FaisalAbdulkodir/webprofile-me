import Image from "next/image";
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

const ProjectItem = ({ imageSrc, title, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = () => {
    onOpen();
  };

  return (
    <div
      className="cursor-pointer w-72 h-96 bg-color-accent mx-auto overflow-hidden shadow-xl flex flex-col border-4 border-color-accent hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={openModal}
    >
      <div className="h-4/5 w-full flex-1 bg-color-primary">
        <Image
          src={imageSrc}
          alt="..."
          width={250}
          height={250}
          className="object-cover h-full w-full object-top"
        />
      </div>
      <div className="h-1/5 w-full">
        <h1 className="font-bold text-lg md:text-xl text-color-dark h-full p-3">
          {title}
        </h1>
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onClose}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
          <ModalBody>
            <p>{description}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="pt-40">
      <h3 className="text-center text-2xl md:text-4xl font-bold text-color-accent ">
        Projects
      </h3>
      <div className="flex pt-20 justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 px-4 text-center">
          <ProjectItem
            imageSrc={Buku}
            title="Dynamic Correlation using GARCH Model"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
          />
          <ProjectItem
            imageSrc={Emosi}
            title="Emotion Detection on Text Using Ensemble Model"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
          />
          <ProjectItem
            imageSrc={Sag}
            title="UI & UX Improvements on Dikpora Dompu Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
