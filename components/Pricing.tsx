'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (publishable key should be in env vars, but hardcoding placeholder for now or using env)
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const plans = [
    {
        name: 'Starter',
        price: '$29',
        period: '/month',
        description: 'Perfect for small businesses starting with AI.',
        features: [
            '500 Messages / month',
            '1 Knowledge Base',
            'Text Support Only',
            'Email Support',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$99',
        period: '/month',
        description: 'For growing teams needing multimodal capabilities.',
        features: [
            'Unlimited Messages',
            '5 Knowledge Bases',
            'Text, Voice & Image',
            'Priority Support',
            'API Access'
        ],
        cta: 'Go Pro',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations.',
        features: [
            'Custom Deployment',
            'Dedicated Account Manager',
            'Custom Integration',
            'SLA Support',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

export default function Pricing() {
    const handleCheckout = async (planName: string) => {
        // Determine Price ID based on planName
        // Call API to create checkout session
        console.log('Checkout clicked for:', planName);
        alert('Stripe Integration Pending: Checkout for ' + planName);
    };

    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600">
                        Choose the plan that fits your business needs.
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
                                    POPULAR
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
                                onClick={() => handleCheckout(plan.name)}
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
