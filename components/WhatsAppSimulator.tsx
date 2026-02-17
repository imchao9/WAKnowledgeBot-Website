'use client';

import { motion } from 'framer-motion';
import { Mic, Paperclip, MoreVertical, Phone, Video, Camera } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function WhatsAppSimulator() {
    const t = useTranslations('WhatsAppSimulator');

    const messages = [
        {
            id: 1,
            sender: 'user',
            type: 'text',
            content: t('messages.user1'),
            time: '10:30 AM',
        },
        {
            id: 2,
            sender: 'user',
            type: 'image',
            content: '/chart-placeholder.png', // We need a placeholder or CSS chart
            time: '10:31 AM',
        },
        {
            id: 3,
            sender: 'bot',
            type: 'text',
            content: t('messages.bot1'),
            time: '10:31 AM',
        },
        {
            id: 4,
            sender: 'user',
            type: 'audio',
            duration: '0:15',
            time: '10:32 AM',
        },
        {
            id: 5,
            sender: 'bot',
            type: 'text',
            content: t('messages.bot2'),
            time: '10:32 AM',
        },
    ];

    return (
        <section id="demo" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* Phone Frame */}
                    <motion.div
                        className="w-full max-w-sm bg-white rounded-[3rem] shadow-2xl border-[8px] border-gray-900 overflow-hidden relative"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Status Bar */}
                        <div className="bg-[#005e54] h-6 w-full"></div> {/* Placeholder notch area color */}

                        {/* Header */}
                        <div className="bg-[#008069] text-white p-3 flex items-center justify-between shadow-md z-10 relative">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">
                                    Bot
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">{t('botName')}</h3>
                                    <p className="text-xs text-white/80">{t('status')}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Video className="w-5 h-5" />
                                <Phone className="w-5 h-5" />
                                <MoreVertical className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="bg-[#efe7dd] h-[500px] overflow-y-auto p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, scale: 0.9, x: msg.sender === 'user' ? 20 : -20 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ delay: index * 0.5, duration: 0.4 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 shadow-sm text-sm relative ${msg.sender === 'user'
                                            ? 'bg-[#d9fdd3] rounded-tr-none'
                                            : 'bg-white rounded-tl-none'
                                            }`}
                                    >
                                        {msg.type === 'text' && <p className="text-gray-800">{msg.content}</p>}

                                        {msg.type === 'image' && (
                                            <div className="w-48 h-32 bg-gray-100 rounded mb-1 flex flex-col items-center justify-center text-gray-400 border border-gray-200 overflow-hidden relative group">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
                                                    alt="Sales Chart"
                                                    fill
                                                    unoptimized
                                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                                                    <Camera className="w-8 h-8 text-white/50" />
                                                </div>
                                            </div>
                                        )}

                                        {msg.type === 'audio' && (
                                            <div className="flex items-center gap-2 min-w-[150px]">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <Mic className="w-4 h-4 text-gray-500" />
                                                </div>
                                                <div className="h-1 bg-gray-300 flex-1 rounded-full relative overflow-hidden">
                                                    <div className="absolute left-0 top-0 h-full w-1/3 bg-gray-500"></div>
                                                </div>
                                                <span className="text-xs text-gray-500">{msg.duration}</span>
                                            </div>
                                        )}

                                        <span className="text-[10px] text-gray-500 block text-right mt-1">
                                            {msg.time} {msg.sender === 'user' && '✓✓'}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="bg-[#f0f2f5] p-2 flex items-center gap-2">
                            <div className="p-2">
                                <MoreVertical className="w-6 h-6 text-gray-500 rotate-90" /> {/* Simulate + icon */}
                            </div>
                            <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-500 shadow-sm flex items-center justify-between">
                                <span>{t('inputPlaceholder')}</span>
                                <Paperclip className="w-5 h-5 text-gray-400 rotate-45" />
                            </div>
                            <div className="p-2 bg-[#00a884] rounded-full text-white">
                                <Mic className="w-5 h-5" />
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
