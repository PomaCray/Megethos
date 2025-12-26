"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="Home"
      className="flex flex-col justify-center items-center bg-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView="visible"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="px-10 py-10 tracking-wider leading-relaxed md:text-lg"
      >
        <div className="text-center">
          <h1 className="font-bold text-5xl mb-5  ">
            Welcome to <span className="text-green-500">M</span>egethos
          </h1>
          <p className="font-bold">Your task tracker for DAOs and Web3 teams</p>
          <p className="">
            Coordinate work, verify contributions, and distribute rewards
            transparently, all tied directly to wallet identity. A decentralized
            system for assigning tasks, recording contributions, and enforcing
            rewards without relying on off-chain trust.
          </p>
        </div>
        <div className="flex mt-8 justify-center gap-2 text-[10px] md:text-base ">
          <button className="w-fit  px-2 py-2 bg-primary text-white  rounded-lg bg-green-500 hover:bg-primary/90 font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
            Launch App
          </button>
          <button className="w-fit px-2 py-2 bg-primary text-green-500  rounded-lg border border-green-500 hover:bg-primary/90 font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
            Explore Features
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView="visible"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className=""
      >
        <Image
          src="/team.svg"
          alt="Hero Image"
          className=""
          width={600}
          height={600}
        />
      </motion.div>
    </section>
  );
}
