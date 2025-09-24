import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 pt-32">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact <span className="text-gray-400">Us</span>
      </motion.h1>

      <motion.form
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-gray-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:border-gray-400"
        />
        <motion.button
          type="submit"
          className="w-full border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
