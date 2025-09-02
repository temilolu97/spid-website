import React from 'react'
import Button from './Button'
import mapImage from '../assets/map-base 1.png'
import personal from '../assets/Personal.png'
import accounType from '../assets/ChooseAccountType.png'
import fundAccount from '../assets/FundAccount.png'
import convertFunds from '../assets/Fund Coversion.png'
import successfulCreation from '../assets/Created Succefully.png'

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose account type',
      text: 'Sign up in minutes by selecting the right account type and completing verification.',
      image: accounType,
    },
    {
      id: 2,
      title: 'Fund your account',
      text: 'Easily add money to your wallet using multiple funding options.',
      image: fundAccount,
    },
    {
      id: 3,
      title: 'Convert funds instantly',
      text: 'Swap between currencies and stablecoins seamlessly at real-time rates.',
      image: convertFunds,
    },
    {
      id: 4,
      title: 'Start transacting',
      text: 'Send, receive, and manage money globally — instantly and securely.',
      image: successfulCreation,
    },
  ]

  return (
    <div className="mb-20">
      {/* Hero Section */}
      <div className="relative border border-[#DEE0FC] bg-gradient-to-r from-[#DBDCFA] via-white to-[#EBEFFF] rounded-2xl max-w-[1030px] mx-auto px-6 py-12 sm:px-12 sm:py-16">
        <div className="relative z-10 max-w-lg">
          <p className="font-bold text-2xl sm:text-3xl md:text-5xl bg-gradient-to-r from-[#868ADF] to-[#3138B1] bg-clip-text text-transparent">
            Start Your Journey to Smarter Banking
          </p>
          <div className="mt-6">
            <Button
              className="bg-spid-primary border-2 border-spid-primary text-white font-semibold text-base sm:text-lg"
              text="Open personal account"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Background Images */}
        <div className="absolute -top-4 right-0 w-72 sm:w-[550px] opacity-70 sm:opacity-100">
          <img src={mapImage} alt="map background" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute top-5 right-12 w-20 sm:w-auto">
          <img src={personal} alt="personal" />
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-[1030px] mx-auto mt-20 sm:mt-[100px]">
        <div className="flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-20">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">How it works</p>
          <p className="text-gray-700 max-w-md">
            All-in-one platform to manage multi-currency wallets and power cross-border transfers without the complexity.
          </p>
        </div>

        <div className="mt-16 sm:mt-24 space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left or Right content based on even/odd */}
              {index % 2 === 0 ? (
                <>
                  {/* Step Info */}
                  <div className="flex flex-col items-center md:items-center text-center md:text-left">
                    <div className="mb-6 h-14 w-14 rounded-full bg-spid-primary flex items-center justify-center font-medium text-xl text-white">
                      {step.id}
                    </div>
                    <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#1E2024]">
                      {step.title}
                    </p>
                    <p className="mt-2 text-gray-700">{step.text}</p>
                  </div>

                  {/* Step Image */}
                  <div className="flex justify-center">
                    <div className="p-6 bg-[#F5F5F5] rounded-xl w-full max-w-sm">
                      <img src={step.image} alt={step.title} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Step Image */}
                  <div className="flex justify-center">
                    <div className="p-6 bg-[#F5F5F5] rounded-xl w-full max-w-sm">
                      <img src={step.image} alt={step.title} className="w-full h-auto object-contain" />
                    </div>
                  </div>

                  {/* Step Info */}
                  <div className="flex flex-col items-center md:items-center text-center md:text-left">
                    <div className="mb-6 h-14 w-14 rounded-full bg-[#E2E4FC] flex items-center justify-center font-medium text-xl text-black">
                      {step.id}
                    </div>
                    <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#1E2024]">
                      {step.title}
                    </p>
                    <p className="mt-2 text-gray-700">{step.text}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
