import React from 'react'
import logo from '../assets/SpidLogo.png'
import { MdFacebook } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Button from './Button'
import image from '../assets/FooterCurrencies.png'
import Modal from './Modal'
import TermsAndConditions from '../pages/TermsAndConditions'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const [activeOption, setActiveOption] = React.useState<string | null>(null)
    const footerItems = [
        {
            name: "Features",
            options: ["Direct Pay In", "Checkout", "Virtual Accounts", "Remittances", "Withdrawals"]
        },
        {
            name: "Company",
            options: ["FAQs", "Contact Us", "Blog"]
        },
        {
            name: "Legal",
            options: ["Terms of Service", "Privacy notice"]
        },
        {
            name: "Contact Us",
            options: ["support@spid.io", "UK: +44 (800) 1026864", "Canada: +1 (877) 2025103"]
        }
    ]
    const navigate = useNavigate()
    const handleClick = (option: string) => {
        if (option === "Terms of Service") {
            navigate("/terms-and-conditions")
        }
        if (option === "Privacy notice") {
            setActiveOption("Privacy")
            navigate("/privacy-policy")
        }
    }
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
            {/* Hero / Newsletter Section */}
            <div className="relative mb-20 bg-gradient-to-r from-[#1820A3] to-[#ABB0F9] rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-center md:justify-between px-6 md:px-20 py-10 gap-8">
                    {/* Left Side */}
                    <div className="z-20 text-center md:text-left">
                        <div className="font-bold text-3xl md:text-5xl text-white mb-4">
                            <p>Send money</p>
                            <p>Globally in seconds</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-base md:text-lg text-spid-inactive">Join our newsletter</p>
                            <p className="font-normal text-sm md:text-base text-spid-inactive">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="bg-white rounded-lg p-3 w-full sm:max-w-xs focus:outline-none"
                            />
                            <Button
                                onClick={() => { }}
                                text="Subscribe"
                                className="border-none font-semibold text-white text-base bg-gradient-to-r from-[#5B5C5E] to-[#1E2024] w-full sm:w-auto"
                            />
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="hidden md:block absolute right-20 h-full  w-full md:w-[284px] flex-shrink-0">
                        <img src={image} alt="Currencies" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="mb-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    <div>
                        <img src={logo} alt="Spid Logo" className="h-10" />
                    </div>
                    {footerItems.map((item, index) => (
                        <div key={index}>
                            <p className="font-semibold text-base text-[#1E2024] mb-2">{item.name}</p>
                            <div>
                               {item.options.map((option, idx) => {
  const isEmail = option.includes("@");
  const isTerms = option === "Terms of Service";
  const isPrivacy = option.toLowerCase() === "privacy notice";

  return (
    <p
      key={idx}
      onClick={
        isTerms || isPrivacy
          ? () => handleClick(option)
          : isEmail
          ? () => (window.location.href = `mailto:app.support@ideospay.com`)
          : undefined
      }
      className={`font-normal text-sm text-[#5B5C5E] py-1 cursor-pointer hover:text-[#1E2024] ${
        isEmail ? "underline" : ""
      }`}
    >
      {option}
    </p>
  );
})}

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t pt-6 pb-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#5B5C5E]">
                        <p>© 2025 Spid. All rights reserved.</p>
                        <p className="cursor-pointer hover:text-[#1E2024]">Privacy Policy</p>
                        <p className="cursor-pointer hover:text-[#1E2024]">Terms of Service</p>
                        <p className="cursor-pointer hover:text-[#1E2024]">Cookies settings</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <MdFacebook size={22} color="#1E2024" />
                        <FaInstagram size={22} color="#1E2024" />
                        <FaXTwitter size={22} color="#1E2024" />
                        <FaLinkedin size={22} color="#1E2024" />
                        <FaYoutube size={22} color="#1E2024" />
                    </div>
                </div>
            </div>
            {activeOption == "Terms" && (
                <Modal modalBg='bg-[#E5E5FF]' modalWidth='max-w-[1000px]' isOpen={true} onClose={()=>{}} children={<TermsAndConditions/>}/>
            )}
        </div>
    )
}

export default Footer
