import HeroSection from '../components/HeroSection'
import image from '../assets/Personal Spid bg.png'
import fundConversionImage from '../assets/Fund Coversion.png'
import { Check } from 'lucide-react'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import StablecoinInfo from '../components/StablecoinInfo'
import ChooseRightAccount from '../components/ChooseRightAccount'
import Faqs from '../components/Faqs'

const Home = () => {
    const information= [
        "Convert NGN ↔ USD ↔ EUR ↔ GBP ↔ USDT, USDC",
        "No hidden fees",
        "Instant execution"
    ]
    return (
        <div className=''>
            <HeroSection
                message='Seamless Multi-Currency Transfers. Global Reach, Zero Transfer Charges.'
                subMessage='SPID lets you send, receive, and manage multiple currencies including stablecoins with real-time conversion rates and zero charges on transfers.'
                ctaMessage='Get started'
                backgroundImage={image}
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-17 bg-gradient-to-b from-[#EDEEFF] to-[#E5E5FF] px-10 py-10 lg:px-31 lg:py-22 '>
                <div className='flex flex-col  '>
                    <div className='font-[700] text-[#9A9EE5] mb-[67px]'>
                        <p className='text-[42px]'>Swap Between Currencies & Digital Assets in Seconds</p>
                        <p className='text-[24px] text-[#3138B1]'>Easily exchange between fiat currencies and supported stablecoins at transparent, real-time rates all within your secure wallet.</p>
                    </div>
                    <div>
                        {information.map((info, index) => (
                            <div key={index} className='flex items-center mb-5 gap-1'>
                                <div className='flex items-center justify-center h-7 aspect-square bg-[#F7F8FF] rounded-full'>
                                    <Check color='#5962F1' size={15}/>
                                </div>
                                <p className='font-[500] text-[16px] text-[#08091A] '>{info}</p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={fundConversionImage} className='h-[525px] w-[536px]' />
                </div>
            </div>
            <Features/>
            <HowItWorks/>
            <StablecoinInfo/>
            <ChooseRightAccount/>
            <Faqs/>
        </div>
    )
}

export default Home