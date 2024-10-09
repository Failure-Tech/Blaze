'use client';

import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { getAuth } from 'firebase/auth'; // Firebase auth import

// Stripe Plans >> fill in your own priceId & link
export const plans = [
    {
        link: import.meta.env.VITE_MONTHLY_PAYMENT_LINK,
        priceId: import.meta.env.VITE_MONTHLY_PRICE_ID,
        price: 19.99,
        duration: '/month',
        name: 'Starter Plan',
        features: ['ReactJs boilerplate', 'User oauth', 'Database', 'Emails', '1 year of updates', '24/7 support'],
    },
    {
        link: import.meta.env.VITE_YEARLY_PAYMENT_LINK,
        priceId: import.meta.env.VITE_YEARLY_PRICE_ID,
        price: 29.99,
        duration: '/year',
        name: 'Complete Plan',
        features: ['Everything in Starter Plan', 'Additional Custom Features', 'Priority Support', 'Exclusive Resources'],
    }
];

const Stripecard: React.FC = () => {
    const [plan, setPlan] = useState(plans[0]);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserEmail(user.email);
                console.log("User is logged in:", user.email);
            } else {
                console.log("No user is logged in");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <section id="pricing">
                <div className="py-24 px-8 max-w-5xl mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        {/* <p className="font-medium text-primary mb-5">Pricing</p> */}
                        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
                            Choose Your Plan
                        </h2>
                    </div>

                    {/* Pricing Cards */}
                    <div className="flex flex-col md:flex-row justify-center gap-12 mt-8">
                        {plans.map((planOption, index) => (
                            <div
                                key={index}
                                className={`w-full max-w-lg bg-base-300 shadow-2xl p-10 text-white flex flex-col justify-between rounded-xl transition duration-300 transform hover:scale-105 ${
                                    plan.price === planOption.price ? 'border-2 border-primary' : ''
                                }`}
                                onClick={() => setPlan(planOption)}
                            >
                                <div>
                                    <h2 className="text-2xl font-semibold mb-8">{planOption.name}</h2>
                                    <p className="text-2xl font-bold mb-8">
                                        ${planOption.price} <span className="text-lg">{planOption.duration}</span>
                                    </p>
                                    <ul className="list-none space-y-6">
                                        {planOption.features.map((feature, i) => (
                                            <li key={i}>
                                                <FaCheck className="inline-block text-green-500 mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <a
                                        className="btn btn-primary btn-block mt-8 py-3 text-white font-bold"
                                        target="_blank"
                                        href={
                                            planOption.link +
                                            (userEmail ? `?prefilled_email=${userEmail}` : '')
                                        }
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stripecard;
