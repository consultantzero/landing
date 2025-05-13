import React from 'react';
import { motion } from 'framer-motion';

export function ConfirmationMessage({msg}: {msg?: string}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative z-10 mt-4 text-center"
    >
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-teal-500 text-lg font-medium"
      >
        {msg}
      </motion.p>
    </motion.div>
  );
} 