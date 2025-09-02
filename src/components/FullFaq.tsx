import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const faqData = [
    {
        section: "About SPID",
        items: [
            {
                question: "What is SPID?",
                answer:
                    "SPID is a cross-border digital payment and remittance platform that allows users to send, receive, and manage money seamlessly in both local (NGN) and digital (stablecoin) currencies. It enables wallet creation, user verification, fast transactions, and enterprise onboarding for individuals and businesses.",
            },
            {
                question: "Who can use SPID?",
                answer:
                    "SPID is open to individuals (18+) and registered businesses who need to transact locally or globally with ease, speed, and transparency.",
            },
            {
                question: "Is SPID available outside Nigeria?",
                answer:
                    "Yes. While SPID is headquartered in Nigeria, it supports international users for remittance and stablecoin-based services.",
            },
        ],
    },
    {
        section: "Account Creation & Onboarding",
        items: [
            {
                question: "How do I create an account on SPID?",
                answer:
                    "Visit https://sendwithspid.com and click “Sign Up.” You can choose either a Personal or Business account and follow the simple onboarding steps.",
            },
            {
                question: "What documents do I need for registration?",
                answer:
                    "For personal accounts: BVN/NIN and a valid government-issued ID. For business accounts: CAC documents, utility bill, and business contact information.",
            },
            {
                question: "Is KYC required to use SPID?",
                answer:
                    "Yes. KYC (Know Your Customer) is mandatory to access full wallet functionality and ensure regulatory compliance and security.",
            },
        ],
    },
    {
        section: "Wallet & Transactions",
        items: [
            {
                question: "What currencies can I hold or transact with on SPID?",
                answer:
                    "You can hold NGN in your local wallet and also transact using stablecoins such as USDT, USDC, and others.",
            },
            {
                question: "Can I fund my wallet with a Nigerian bank account?",
                answer:
                    "Yes. You can top up your SPID wallet using bank transfers from Nigerian accounts.",
            },
            {
                question: "How long do transactions take?",
                answer:
                    "Transactions are typically processed instantly. However, delays may occur during network congestion or verification steps.",
            },
            {
                question: "Can I send money abroad with SPID?",
                answer:
                    "Yes. SPID supports global payouts via stablecoins and traditional remittance options, depending on your destination country.",
            },
        ],
    },
    {
        section: "Security & Privacy",
        items: [
            {
                question: "Is SPID secure?",
                answer:
                    "Absolutely. SPID uses end-to-end encryption, multi-factor authentication, and role-based access controls to protect user data and transactions."
            },
            {
                question: "Where is my data stored?",
                answer:
                    "Data is securely hosted on encrypted servers and compliant cloud infrastructure, with backups and audit logs in place."
            },
            {
                question: "How does SPID protect my personal information?",
                answer:
                    "SPID adheres to a strict Privacy Policy and complies with local and international data protection laws. Your data is never sold or shared with unauthorized third parties."
            },

        ],
    },
    {
        section: "Stablecoins and Crypto",
        items: [
            {
                question: "What are stablecoins?",
                answer:
                    "Stablecoins are cryptocurrencies backed 1:1 by fiat currencies (like the USD), offering price stability for fast, secure cross-border payments.",
            },
            {
                question: "Can I receive money in USDT or USDC?",
                answer:
                    "Yes. SPID allows you to receive and hold supported stablecoins like USDT and USDC, and swap to NGN when needed."
            },
            {
                question: "Is there a fee for stablecoin transactions?",
                answer:
                    "A small network and service fee may apply depending on the blockchain used and volume of transaction. These will be shown before you confirm a transaction."
            },

        ],
    },
    {
        section: "Currency Conversion",
        items: [
            {
                question: "How does currency conversion work on SPID?",
                answer:
                    "SPID converts currencies (NGN to USD, NGN to USDT, etc.) using market-driven exchange rates. You will always see the current rate before confirming any swap.",
            },
            {
                question: "Can I lock in a rate?",
                answer:
                    "No. Exchange rates are dynamic and reflect live market data."
            }
        ],
    },
    {
        section: "Business and Enterprise Accounts",
        items: [
            {
                question: "Can businesses use SPID?",
                answer:
                    "Yes. Registered businesses can sign up, complete onboarding, and access features such as multi-user management, invoice payments, and international settlements.",
            },
            {
                question: "What features are available for business users",
                answer:
                    "Business users can enjoy bulk payment tools, payment tracking, stablecoin payouts, team wallets, and dedicated support."
            }
        ],
    },
    {
        section: "Testing and Support",
        items: [
            {
                question: "How can I reach support?",
                answer:
                    "You can reach SPID support via email at support@spidpay.io or through the in-app chat interface for faster response.",
            },

        ],
    },
    {
        section: "Legal and Compliance",
        items: [
            {
                question: "Is SPID licensed or regulated?",
                answer:
                    "SPID operates under relevant regulatory guidelines and partners with licensed entities for services like KYC, currency exchange, and wallet infrastructure.",
            },
            {
                question: "Where can I find the Terms & Privacy Policy?",
                answer: (
                    <>
                        You can find the full <Link to={"/terms-and-conditions"} className="underline"> Terms and Conditions</Link> and <Link className="underline" to={"/privacy-policy"}> Privacy Policy</Link> linked in the website footer.,
                    </>
                )
            },

        ],
    },
];

const FullFaq = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
        setOpenQuestion(null); // reset inner questions when toggling section
    };

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question);
    };

    return (
        <div className=" py-16 px-6">
            <div className="max-w-[768px] mx-auto mb-20">
                <h1 className="font-bold text-[48px] text-center mb-12">
                    SPID Frequently Asked Questions (FAQs)
                </h1>

                {/* FAQ Sections */}
                <div className="space-y-6">
                    {faqData.map((section, index) => (
                        <div key={index} className="border-t border-gray-300">
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.section)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="font-bold text-[18px] text-[#5962F1]">
                                    {section.section}
                                </span>
                                {openSection === section.section ? (
                                    <ChevronUp className="w-5 h-5 text-[#5962F1]" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-[#5962F1]" />
                                )}
                            </button>

                            {/* Section Items */}
                            {openSection === section.section && (
                                <div className="pl-4 space-y-4">
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="border-t border-black pt-4"
                                        >
                                            <button
                                                onClick={() => toggleQuestion(item.question)}
                                                className="w-full flex justify-between items-center text-left"
                                            >
                                                <span className="font-bold text-[18px] text-black">
                                                    Q: {item.question}
                                                </span>
                                                {openQuestion === item.question ? (
                                                    <ChevronUp className="w-5 h-5 text-black" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-black" />
                                                )}
                                            </button>

                                            {openQuestion === item.question && (
                                                <p className="mt-2 text-[16px] font-normal text-gray-700 leading-relaxed">
                                                    A: {item.answer}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="mb-6 font-[700] text-[32px] text-black">Still have questions?</p>
                <div>
                    <Button onClick={() => { }} text="Contact" className="border border-spid-primary bg-spid-inactive text-[16px] font-[600] text-spid-primary" />
                </div>

            </div>
        </div>
    );
};

export default FullFaq;
