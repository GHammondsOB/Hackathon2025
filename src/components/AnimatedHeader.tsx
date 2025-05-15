"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import BananaLogo from '../../public/banana.svg';

export default function AnimatedHeader() {
  return (
    <div className="flex flex-col items-center mb-6 gap-4 w-full">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="drop-shadow-lg"
        >
          <Image
            priority
            src={BananaLogo}
            alt="Banana Logo"
            width={80}
            height={80}
            className="drop-shadow-sm"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="drop-shadow-lg"
        >
          <Image
            src="/QueryousGeorgeLogo.png"
            alt="Querious George Logo"
            width={600}
            height={150}
            priority
            className="drop-shadow-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}
