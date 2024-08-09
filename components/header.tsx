"use client";
import React from "react";
import { BlurImage } from "./blur-image";
import { motion } from "framer-motion";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3],
        }}
        transition={{
          duration: 2,
        }}
        className="absolute inset-0 h-full w-full"
      >
        <BlurImage
          src="/header.jpg"
          className="h-full w-full absolute inset-0 object-cover"
          width={1000}
          height={1000}
          alt="header"
        />
        <div className="absolute bottom-0 h-40  bg-gradient-to-t from-black to-transparent w-full"></div>
      </motion.div>
      <Heading
        as="h1"
        className="text-4xl md:text-4xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20  py-4"
      >
        Indie Hackers Army
      </Heading>
      <Subheading className="text-center mt-2 md:mt-4 text-base md:text-xl relative z-20 max-w-3xl mx-auto">
        A closed community of founders and builders, focused on building and
        sharing knowledge.
      </Subheading>
      <div className="flex sm:flex-row flex-col mt-6">
        <Button
          as={Link}
          href="https://chat.whatsapp.com/H0A8HBYGg3EDBKSW8HzaXt"
          variant="secondary"
        >
          Join Community
        </Button>
        <Button
          as={Link}
          href="https://github.com/manuarora700/indiehackersarmy"
          variant="simple"
          target="_blank"
        >
          Add your product
        </Button>
      </div>
    </div>
  );
};
