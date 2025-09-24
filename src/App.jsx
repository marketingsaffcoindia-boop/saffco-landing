import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black/90 shadow-md fixed top-0 w-full z-50 backdrop-blur">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">SAFFCO</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-gray-400 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-gray-400 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
          <a
            href="#contact"
            className="border border-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-black flex flex-col items-center py-6 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 pt-24">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Space <br className="hidden md:block" />
          with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Premium Interior Design
          </span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          From modular kitchens to turnkey projects — Saffco brings your dream
          interiors to life.
        </motion.p>
        <motion.a
          href="#contact"
          className="border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Consultation
        </motion.a>
      </header>

      {/* Services Section */}
      <section
        id="services"
        className="bg-white text-black py-16 px-6 md:px-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
              Services
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We craft spaces that combine functionality, style, and innovation —
            tailored for modern living.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            className="bg-black text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="https://source.unsplash.com/300x200/?interior,design"
              alt="Interior Design"
              className="rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Interior Designing</h3>
            <p className="text-gray-400">
              Elegant, functional, and modern interiors designed to match your
              lifestyle.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-black text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="https://source.unsplash.com/300x200/?kitchen,modern"
              alt="Modular Kitchens"
              className="rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Modular Kitchens</h3>
            <p className="text-gray-400">
              Sleek and space-saving kitchen solutions customized for comfort
              and efficiency.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-black text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src="https://source.unsplash.com/300x200/?architecture,home"
              alt="Turnkey Projects"
              className="rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-2">Turnkey Projects</h3>
            <p className="text-gray-400">
              From start to finish — complete interior solutions delivered
              hassle-free.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
