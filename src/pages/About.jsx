import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-32">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About <span className="text-gray-400">Saffco</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        At <span className="font-bold">Saffco</span>, we believe great design
        transforms not just spaces, but lives. With years of experience in
        interior design and turnkey solutions, our mission is to bring your
        dream spaces to reality — with precision, style, and innovation.
      </motion.p>
    </div>
  );
}
