"use client";

import Link from "next/link";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="bg-color-dark back">
        <nav className="w-full backdrop-blur-sm  fixed z-10">
          <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-4">
            <div className="flex items-center">
              <h3 className="font-bold text-3xl text-color-accent">FAISAL</h3>
              <div className="md:hidden ml-auto">
                <button onClick={toggleMobileMenu} className="bg-color-accent">
                  {showMobileMenu ? (
                    <CaretUp size={32} />
                  ) : (
                    <CaretDown size={32} />
                  )}
                </button>
              </div>
            </div>
            <div
              className={`md:flex md:flex-row flex-col justify-center text-center gap-4 ${
                showMobileMenu ? "flex" : "hidden"
              }`}
            >
              <Link
                href="#profile-section"
                className="font-bold text-xl text-color-primary"
              >
                My Profile
              </Link>
              <Link
                href="#projects-section"
                className="font-bold text-xl text-color-primary"
              >
                Projects
              </Link>
              <Link
                href="#skills-section"
                className="font-bold text-xl text-color-primary"
              >
                Skills
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
