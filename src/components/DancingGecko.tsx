"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DancingGecko() {
  return (
    <>


      {/* 오른쪽 하단 */}
      <motion.div 
        animate={{ y: [-10, 0, -10] }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="fixed bottom-10 right-10 z-50"
      >
        <Image 
          src="/images/dancing_leopard_gecko.gif" 
          alt="Dancing Leopard Gecko" 
          width={200} 
          height={100} 
        />
      </motion.div>
    </>
  );
}
