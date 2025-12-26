"use client";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
const accordionData = [
  {
    title: "What is Megethos?",
    content:
      "Your task tracker for DAOs and Web3 teams. Coordinate work, verify contributions, and distribute rewards transparently, all tied directly to wallet identity.",
  },
  {
    title: "What problem does this solve?",
    content:
      "It removes ambiguity and disputes from DAO task tracking by enforcing tasks and rewards on-chain.",
  },
  {
    title: "How are contributors identified?",
    content: "Contributors are identified solely by wallet address..",
  },
  {
    title: "How are rewards distributed?",
    content:
      "Rewards are held in smart contracts and released automatically upon approval of completed tasks.",
  },
  {
    title: "What types of rewards are supported?",
    content: "ERC-20 tokens and ERC-721 / ERC-1155 NFTs.",
  },
  {
    title: "Is DAO voting required?",
    content:
      "No. Approval logic is configurable and can be admin-based or DAO-governed.",
  },
  {
    title: "IIs contributor activity public?",
    content:
      "Task activity is publicly verifiable on-chain. Metadata is stored on decentralized storage.",
  },
];

export default function FAQ() {
  return (
    <>
      <section
        id="FAQ"
        className="py-20 px-5 bg-gray-100 flex flex-col md:flex-row justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-bold">Need help?</h1>
          <p>
            Don't worry, we got you. Here are some answers for your questions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion items={accordionData} />
        </motion.div>
      </section>
    </>
  );
}
