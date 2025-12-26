"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Plan() {
  const Pricing = [
    {
      title: "Create Tasks",
      description: "Tasks are defined on-chain with rewards and deadlines.",
    },
    {
      title: "Assign Contributors",
      description: "Tasks are pushed to specific wallet addresses.",
    },
    {
      title: "Submit Proof",
      description:
        "Contributors submit verifiable work proofs stored on decentralized storage.",
    },
    {
      title: "Approve & Reward",
      description:
        "Approval triggers automatic reward distribution and reputation updates.",
    },
  ];
  return (
    <>
      <section id="Pricing" className="bg-green-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-start p-10"
        >
          <h1 className=" text-3xl text-white font-bold">How it works</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-10 pb-20"
        >
          <Image
            src="/direct.svg"
            alt="Pricing Plans"
            width={500}
            height={300}
            className="object-cover rounded-md"
          />

          <div className="flex flex-col gap-y-3 justify-evenly items-center p-5">
            {Pricing.map((plan, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index *0.2 }}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col gap-y-5 bg-gray-200 rounded-md md:p-5 lg:p-10 p-10"
              >
                <h2 className="text-xl font-semibold">{plan.title}</h2>
                <p className="text-sm mb-7 w-50">{plan.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
{
  /* <button className="bg-green-500 shadow-2xl text-white rounded-md p-3 mt-5 hover:pointer  hover:shadow-xl hover:-translate-y-0.5 transition duration-200 ease-in-out hover:bg-green-600">Choose Plan</button> */
}
