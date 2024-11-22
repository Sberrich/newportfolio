"use client";

import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/containers/active-section";
import { Link } from "@/lib/types";
import Image from "next/image";
import Subject from "../../public/wave.png";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="hidden md:flex items-center justify-evenly fixed z-[999] w-full mt-4 px-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold tracking-wide font-['Tahu']">
          B<span className="opacity-100">e</span>
          <span className="opacity-100">r</span>
          <span className="opacity-100">r</span>
          <span className="opacity-100">i</span>
          <span className="opacity-100">c</span>
          <span className="opacity-100">h</span>
          <span className="opacity-100">i</span>
        </span>
        <Image
          src={Subject}
          width={50}
          height={50}
          objectFit="contain"
          alt="sberrich"
          className="animate-pulse"
        />
        <span className="text-2xl font-bold tracking-wide font-['Tahu']">
          S<span className="opacity-100">a</span>
          <span className="opacity-100">m</span>
          <span className="opacity-100">i</span>
          <span className="opacity-100">r</span>
        </span>
      </div>

      {/* Navigation Links */}
      <motion.div
        className="flex p-1 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.hash,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.nameEng}
                {link.hash === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </NextLink>
            </motion.li>
          ))}
        </ul>
        
      </motion.div>
      <motion.div></motion.div>
      <motion.div></motion.div>
    </header>
  );
}
