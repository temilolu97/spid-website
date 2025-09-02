import image from '../assets/Stable coin img.png'
import { Check } from 'lucide-react'
import Button from './Button'

const StablecoinInfo = () => {
  const information = [
    "Perfect for cross-border merchants",
    "Instant, borderless transactions",
    "Zero transfer fees"
  ]

  return (
    <div className="bg-gradient-to-b from-[#E8E8FC] to-[#E5E5FF] px-4 py-12 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <div className="inline-block border border-[#F7F8FF] py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#E4E5FF] via-[#F5EEFF] to-[#D8CCFF]">
            <p className="text-spid-primary font-normal text-sm sm:text-base md:text-lg">
              Use Stablecoins, Stay in Control
            </p>
          </div>

          <div className="mt-6">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#1E2024]">
              Stablecoin Advantage
            </p>
          </div>

          <div className="mt-6 max-w-xl">
            <p className="font-medium text-base sm:text-lg text-[#08091A]">
              Protect your money from currency fluctuations by holding value in USDT or USDC
            </p>
          </div>

          {/* Features List */}
          <div className="mt-6">
            {information.map((info, index) => (
              <div key={index} className="flex items-center mb-4 gap-2">
                <div className="flex items-center justify-center h-7 w-7 bg-[#F7F8FF] rounded-full">
                  <Check color="#5962F1" size={15} />
                </div>
                <p className="font-medium text-sm sm:text-base text-[#08091A]">{info}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Button
              className="bg-spid-primary border-spid-primary font-medium text-base text-white w-full sm:w-auto"
              text="Get Started"
              onClick={() => {}}
            />
            <Button
              className="bg-spid-inactive text-base text-spid-primary border-spid-primary font-medium w-full sm:w-auto"
              text="Stablecoin Guide"
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md sm:max-w-lg border border-white rounded-lg overflow-hidden">
            <img src={image} alt="Stablecoin" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StablecoinInfo
