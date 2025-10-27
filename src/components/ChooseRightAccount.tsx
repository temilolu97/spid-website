import personalIcon from '../assets/Icon (1).png'
import businessIcon from '../assets/Icon (2).png'
import { Check } from 'lucide-react'
import Button from './Button'

const ChooseRightAccount = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-[#F9F8FF] to-[#EDEBFF]">
      {/* Header */}
      <div className="flex justify-center mb-20 text-center">
        <div className="max-w-[520px]">
          <h4 className="font-bold text-3xl sm:text-4xl md:text-[44px] text-[#1B223C] leading-tight mb-4">
            Choose the right account for you
          </h4>
          <p className="text-[#6E7073] font-medium text-base sm:text-lg">
            Whether you’re managing personal finances or handling client payments, Spid makes it simple, secure, and seamless.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Personal Account */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-b from-white to-[#E5E5FF] border border-[#D2D6DA] p-10 rounded-[14px] shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-md duration-200">
            <img
              src={personalIcon}
              alt="Personal account"
              className="h-[45px] w-auto object-contain mb-6"
            />
            <div className="flex-1">
              <h5 className="text-[#1B223C] font-semibold text-[22px] mb-3">
                Personal
              </h5>
              <p className="text-[#6E7073] text-[16px] mb-10">
                Unleash the power of your personal finance with ease and security.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Multi-wallet access',
                  'Easy onboarding & KYC',
                  'Instant global transfers',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={20} color="#5962F1" />
                    <p className="text-[#1B223C] text-[16px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={() => {}}
              className="bg-spid-primary font-semibold text-[14px] text-[#F7F8FF] w-full mt-auto"
              text="Get Started"
            />
          </div>
        </div>

        {/* Business Account */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-b from-[#D8CCFF] via-[#F5EEFF] to-white border border-[#D2D6DA] p-10 rounded-[14px] shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-md duration-200">
            <img
              src={businessIcon}
              alt="Business account"
              className="h-[45px] w-auto object-contain mb-6"
            />
            <div className="flex-1">
              <div className="flex items-center mb-3 gap-3">
                <h5 className="text-[#1B223C] font-semibold text-[22px]">Business</h5>
                <span className="text-[12px] font-semibold text-[#F7F8FF] px-[8px] py-[5px] rounded-md bg-gradient-to-r from-[#656A93] via-[#B7BACF] to-[#656A93] whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <p className="text-[#6E7073] text-[16px] mb-10">
                Take your business to the next level with our tailored plan.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Team-based accounts',
                  'Documented entity registration',
                  'Currency allocation & reporting',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={20} color="#5962F1" />
                    <p className="text-[#1B223C] text-[16px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={() => {}}
              className="bg-spid-primary font-semibold text-[14px] text-[#F7F8FF] w-full mt-auto"
              text="Get Started"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseRightAccount
