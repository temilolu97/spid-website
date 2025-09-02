import Button from './Button'

interface HeroSectionProps {
  message: string
  subMessage: string
  ctaMessage: string
  backgroundImage?: string
}

const HeroSection = ({ message, subMessage, ctaMessage, backgroundImage }: HeroSectionProps) => {
  return (
    <section
      aria-label="Hero section"
      className=" bg-gradient-to-b from-[#F5F5FF] to-white flex flex-col "
    >
      <div className="flex flex-col items-center text-center pt-24 pb-20 px-6">
        <div className="max-w-3xl">
          <h1 className="font-bold text-4xl md:text-6xl text-[#1E2024]">{message}</h1>
          <h2 className="font-normal text-base md:text-lg text-[#08091A] mt-4">
            {subMessage}
          </h2>
        </div>

        <div className="flex gap-4 mt-10">
          <Button
            className="border-2 border-spid-primary bg-spid-primary font-semibold text-[#F7F8FF]"
            text={ctaMessage}
            onClick={() => {}}
          />
          <Button
            className="border border-spid-primary bg-spid-inactive font-semibold text-spid-primary"
            text="Learn more"
            onClick={() => {}}
          />
        </div>
      </div>

      {backgroundImage && (
        <div className="w-full">
          <img
            className="w-full object-cover"
            src={backgroundImage}
            alt=""
          />
        </div>
      )}
    </section>
  )
}

export default HeroSection
