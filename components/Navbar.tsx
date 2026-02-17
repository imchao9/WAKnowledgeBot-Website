'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: t('features'), href: '#features' },
        { name: t('demo'), href: '#demo' },
        { name: t('pricing'), href: '#pricing' },
    ];

    useEffect(() => {
        const updateScrolled = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', updateScrolled);
        return () => window.removeEventListener('scroll', updateScrolled);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="text-whatsapp">WA</span>{t('brand')}
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-whatsapp px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <Link
                                href="#pricing"
                                className="bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-xl"
                            >
                                {t('getStarted')}
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-whatsapp focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-white/95 backdrop-blur-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-whatsapp block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#pricing"
                            className="text-whatsapp hover:text-whatsapp-dark block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('getStarted')}
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
