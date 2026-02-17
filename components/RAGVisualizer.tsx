'use client';

import { motion } from 'framer-motion';
import { Database, FileText, Bot, ArrowRight, BrainCircuit } from 'lucide-react';

export default function RAGVisualizer() {
    const steps = [
        {
            icon: <FileText className="w-8 h-8 text-blue-500" />,
            label: 'Knowledge Source',
            desc: 'PDFs, Docs, Web'
        },
        {
            icon: <Database className="w-8 h-8 text-purple-500" />,
            label: 'Vector Database',
            desc: 'Embeddings Storage'
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-whatsapp" />,
            label: 'AI Processing',
            desc: 'Retrieval & Generation'
        },
        {
            icon: <Bot className="w-8 h-8 text-green-600" />,
            label: 'WhatsApp Response',
            desc: 'Accurate Answers'
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How RAG Technology Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your data is securely indexed turned into accurate responses in seconds.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-8" />

                    {steps.map((step, index) => (
                        <div key={index} className="contents md:block relative group">
                            {/* Arrow for Mobile */}
                            {index > 0 && (
                                <div className="md:hidden text-gray-300 my-2">
                                    <ArrowRight className="rotate-90" />
                                </div>
                            )}

                            <motion.div
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg relative z-10 w-64 text-center hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-whatsapp/10 transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.label}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </motion.div>

                            {/* Arrow for Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-8 text-gray-300 transform -translate-y-full z-0">
                                    <ArrowRight />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
