'use client';

import { Link } from '@/navigation';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="text-whatsapp">WA</span>KnowledgeBot
                        </Link>
                        <p className="mt-4 text-gray-500 max-w-xs">
                            {t('brandDesc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{t('product')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="#features" className="text-gray-500 hover:text-whatsapp">Features</Link></li>
                            <li><Link href="#demo" className="text-gray-500 hover:text-whatsapp">Demo</Link></li>
                            <li><Link href="#pricing" className="text-gray-500 hover:text-whatsapp">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">{t('company')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-500 hover:text-whatsapp">{t('about')}</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-whatsapp">{t('privacy')}</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-whatsapp">{t('terms')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-base text-gray-400">
                        &copy; {new Date().getFullYear()} WAKnowledgeBot. {t('rights')}
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-whatsapp">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-whatsapp">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-whatsapp">
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
