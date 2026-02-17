'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { createCheckoutSession } from '@/app/actions';

export default function Pricing() {
    const t = useTranslations('Pricing');

    const plans = [
        {
            name: t('plans.starter.name'),
            price: '$29',
            period: '/month',
            priceId: 'price_starter_placeholder',
            description: t('plans.starter.desc'),
            features: [
                t('plans.starter.features.messages'),
                t('plans.starter.features.kb'),
                t('plans.starter.features.support'),
                t('plans.starter.features.email'),
            ],
            cta: t('plans.starter.cta'),
            popular: false,
        },
        {
            name: t('plans.pro.name'),
            price: '$99',
            period: '/month',
            priceId: 'price_pro_placeholder',
            description: t('plans.pro.desc'),
            features: [
                t('plans.pro.features.messages'),
                t('plans.pro.features.kb'),
                t('plans.pro.features.multimodal'),
                t('plans.pro.features.priority'),
                t('plans.pro.features.api')
            ],
            cta: t('plans.pro.cta'),
            popular: true,
        },
        {
            name: t('plans.enterprise.name'),
            price: t('plans.enterprise.price'),
            period: '',
            priceId: 'price_enterprise_placeholder',
            description: t('plans.enterprise.desc'),
            features: [
                t('plans.enterprise.features.deployment'),
                t('plans.enterprise.features.manager'),
                t('plans.enterprise.features.integration'),
                t('plans.enterprise.features.sla'),
            ],
            cta: t('plans.enterprise.cta'),
            popular: false,
        },
    ];

    const handleCheckout = async (priceId: string) => {
        if (priceId.includes('enterprise')) {
            console.log('Contact sales for Enterprise');
            return;
        }
        await createCheckoutSession(priceId);
    };

    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-2xl shadow-xl overflow-hidden border p-8 flex flex-col ${plan.popular ? 'border-whatsapp ring-2 ring-whatsapp ring-opacity-50 relative' : 'border-gray-100'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-whatsapp text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    {t('plans.pro.popular')}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="text-gray-500 mt-2 text-sm">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 text-whatsapp mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleCheckout(plan.priceId)}
                                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${plan.popular
                                    ? 'bg-whatsapp text-white hover:bg-whatsapp-dark shadow-md'
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
