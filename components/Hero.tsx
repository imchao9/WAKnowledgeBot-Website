'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <ParticleNetwork />

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Connect Your Business with <br />
                        <span className="text-whatsapp">Intelligent WhatsApp AI</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Empower your customer support with Multimodal RAG technology.
                        Automate responses, handle voice notes, and process images 24/7.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 flex justify-center gap-4"
                >
                    <Link
                        href="#pricing"
                        className="px-8 py-3 rounded-full bg-whatsapp text-white font-semibold text-lg hover:bg-whatsapp-dark transition-all shadow-lg hover:shadow-cyan-500/20"
                    >
                        Start Free Trial
                    </Link>
                    <Link
                        href="#demo"
                        className="px-8 py-3 rounded-full bg-white text-gray-700 font-semibold text-lg border border-gray-200 hover:border-whatsapp hover:text-whatsapp transition-all shadow-sm"
                    >
                        View Demo
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
