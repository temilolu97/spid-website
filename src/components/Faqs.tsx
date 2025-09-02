import  { useState } from 'react'
import HomeImage from '../assets/Home Page (KYC Completed).png'
import { Minus, Plus } from 'lucide-react';
import Modal from './Modal';
import FullFaq from './FullFaq';

const Faqs = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
const [openModal, setOpenModal] = useState(false);
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };



  const faqs = [
    {
      question: "What is Spid?",
      answer: "Spid is a multi-currency wallet that allows you to send, receive, and manage multiple currencies including stablecoins with real-time conversion rates and zero charges on transfers."
    },
    {
      question:"What does Spid offer?",
      answer:"Spid offers seamless multi-currency transfers, real-time conversion rates, and zero charges on transfers. It supports various fiat currencies and stablecoins, making it easy to manage your finances globally."
    },
    {
      question:"How does Spid’s FX conversion work?",
      answer:"Spid’s FX conversion allows you to easily exchange between fiat currencies and supported stablecoins at transparent, real-time rates all within your secure wallet."
    },
    {
      question:"How does Spid’s KYC process work?",
      answer:"Spid’s KYC process is designed to be quick and user-friendly. You will need to provide some personal information and documents to verify your identity. Once your KYC is approved, you can start using Spid’s services."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center my-20 px-4 sm:px-6 md:px-10">
      {/* Hero / Image Section */}
      <div className="w-full max-w-screen-xl rounded-2xl bg-[#FAFAFA] flex justify-center overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <div className="mt-10 max-w-3xl">
            <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-[#1E2024]">
              The all-in-one answer to your payment needs
            </p>
            <p className="mt-4 text-base sm:text-lg font-normal text-[#08091A]">
              Get Spid today and take the hassle out of payments
            </p>
          </div>
          <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mt-6">
            <img src={HomeImage} alt="Spid Home" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mt-28 w-full max-w-3xl">
        <div className="text-center mb-10">
          <p className="font-bold text-2xl sm:text-3xl md:text-5xl text-[#1E2024]">
            Frequently Asked Questions
          </p>
          <p className="font-normal text-base sm:text-lg text-[#1E2024] mt-5">
            We compiled a list of answers to address your most pressing questions 
            regarding our services
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-start border border-[#CFCFCF] py-4 sm:py-6 px-4 sm:px-6 mb-5 rounded-lg"
            >
              <div className="flex-1">
                <p className="mb-3 font-medium text-base sm:text-lg text-[#1E2024]">
                  {faq.question}
                </p>
                {openItem === index && (
                  <p className="font-normal text-sm sm:text-base text-[#1E2024]">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div
                className="cursor-pointer ml-4"
                onClick={() => toggleItem(index)}
              >
                {openItem === index ? <Minus /> : <Plus />}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p
            onClick={() => setOpenModal(true)}
            className="underline font-bold text-lg sm:text-xl md:text-2xl text-[#545CE3] hover:cursor-pointer"
          >
            See all FAQs
          </p>
        </div>
      </div>
      <Modal isOpen={openModal} modalWidth='max-w-[1000px]' modalHeight='max-h-screen' onClose={() => setOpenModal(false)} children={<FullFaq/>}/>
    </div>
  )
}

export default Faqs
