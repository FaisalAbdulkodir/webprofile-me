import Image from "next/image";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <section id="profile-section">
        <Profile />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="skills-section">
        <Skills />
      </section>
    </>
  );
}
