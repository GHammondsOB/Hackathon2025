"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import BananaLogo from '../../public/banana.svg';

export default function AnimatedHeader() {
  return (
    <div className="flex items-center mb-4 gap-2">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          priority
          src={BananaLogo}
          alt="Banana Logo"
          width={64}
          height={64}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-yellow-600 tracking-tight">Querious George</h1>
      </motion.div>
    </div>
  );
}
