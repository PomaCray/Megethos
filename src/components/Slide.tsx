'use client'
import { motion } from "framer-motion";
export default function Slide() {
  return (
    <section className="bg-green-500 h-50 text-white flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay:  0.2 }}
        viewport={{ once: true }}
        className="marquee space-y-5"
        role="region"
        aria-label="Scrolling content"
      >
        <div className="marquee__inner text-3xl">
          Wallet-based identity · On-chain task verification · Automated token
          rewards
        </div>
        <div className="marquee__outer text-3xl">
          · Contributor reputation · DAO-grade transparency · No manual tracking
          · No off-chain disputes · Protocol-native coordination
        </div>
      </motion.div>
    </section>
  );
}
