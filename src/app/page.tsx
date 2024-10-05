"use client"
import Image from "next/image";
import Link from "next/link";
import Nasa from "../public/img/nasa-logo.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-blue-900 text-white">
      <Image src={Nasa} alt="Nasa logo" className="mb-4 h-40 w-auto" />
      <h1 className="text-4xl font-bold text-center mb-2">Worlds in Collision</h1>
      <h2 className="text-2xl text-center mb-8">Immanuel Velikovsky</h2>
      <div className="flex gap-8">
        <Link href="/pages/opcao01">
        <motion.div
      className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
      initial={{ y: 30, opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1.5
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)',
      }}
      style={{
        boxShadow: '0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)',
      }}
    >
            🌌 Opção 1
          </motion.div>
        </Link>
        <Link href="/pages/opcao02">
        <motion.div
      className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
      initial={{ y: 30, opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1.5
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)',
      }}
      style={{
        boxShadow: '0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)',
      }}
    >
            🌌 Opção 2
          </motion.div>
        </Link>
        <Link href="/pages/opcao03">
        <motion.div
      className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
      initial={{ y: 30, opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1.5
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)',
      }}
      style={{
        boxShadow: '0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)',
      }}
    >
            🌌 Opção 3
          </motion.div>
        </Link>
        <Link href="/pages/opcao04">
        <motion.div
      className="bg-white/10 rounded-lg p-5 backdrop-blur-sm"
      initial={{ y: 30, opacity: 0, scale: 0.8 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 1.5
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 25px rgba(0, 175, 255, 0.9), 0 0 50px rgba(0, 175, 255, 0.7)',
      }}
      style={{
        boxShadow: '0 0 15px rgba(0, 175, 255, 0.5), 0 0 30px rgba(0, 175, 255, 0.3)',
      }}
    >
            🌌 Opção 4
          </motion.div>
        </Link>
      </div>
    </div>
  );
}