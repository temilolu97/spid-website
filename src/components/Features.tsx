import multicurrencyImage from '../assets/Currencies Illustration.png'
import crossBorderTransferImage from '../assets/Cross border Transfer Currencies Illustration.png'
import smartKyc from '../assets/Smart KYC Illustration.png'
import conversionImage from '../assets/Group 1420070428.png'
const Features = () => {
    return (
        <div className='flex flex-col items-center justify-center py-27.5 px-4 md:px-10 lg:px-20'>
            <div className='max-w-[705px] text-center'>
                <p className='font-[700] text-[48px]'>Your All-in-One Global Financial Toolkit</p>
                <p className='font-[400] text-[20px] text-[#08091A]'>All-in-one platform to manage multi-currency wallets,
                    power cross-border transfers without the complexity</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-17.5'>
                <div className='rounded-2xl p-12 bg-[#E9FAF4] h-[519px] relative'>
                    <div>
                        <p className='w-[200px] font-[600] text-[24px] text-[#1E2024]'>Multi-Currency Wallets</p>
                    </div>
                    <div className='mt-4 pb-20 font-[400] text-sm text-[#08091A]'>
                        <p>- Store multiple fiat currencies and stablecoins in one place.</p>
                        <p> - Instantly access funds in USD, EUR, GBP, NGN, and more.</p>
                        <p>- Add digital assets like USDT and USDC for stability and flexibility.</p>
                    </div>
                    <div className='absolute right-0 bottom-0 md:top-55  md:h-[323px] md:w-[388px]'>
                        <img src={multicurrencyImage} className='h-full w-full object-contain' />
                    </div>
                </div>
                <div className='rounded-2xl p-12 bg-[#F2FCE9] h-[519px] relative'>
                    <div>
                        <p className='w-[250px] font-[600] text-[24px] text-[#1E2024]'>Instant Cross-Border Transfers</p>
                    </div>
                    <div className='mt-4 pb-20 font-[400] text-sm text-[#08091A]'>
                        <p>-Send and receive money across borders in seconds.</p>
                        <p> - Zero charges on transfers within the SPID network.</p>
                        <p>- Competitive FX rates for currency conversions.</p>
                        
                    </div>
                    <div className='absolute right-0 md:right-20 top-56  h-[350px] w-[320px]'>
                        <img src={crossBorderTransferImage} className='h-full w-full object-contain' />
                    </div>
                </div>
                <div className='rounded-2xl p-12 bg-[#EEEBFC] h-[519px] relative'>
                    <div>
                        <p className='w-[145px] font-[600] text-[24px] text-[#1E2024]'>Smart KYC
                            & Compliance</p>
                    </div>
                    <div className='mt-4 pb-20 font-[400] text-sm text-[#08091A]'>
                        <p>- Quick and secure onboarding for individuals and businesses.</p>
                        <p>- Trusted identity verification.</p>

                    </div>
                    <div className='absolute right-1 md:right-10 top-51  h-[350px] w-[350px]'>
                        <img src={smartKyc} className='h-full w-full object-contain' />
                    </div>
                </div>
                <div className='rounded-2xl p-12 bg-[#EBF3FC] h-[519px] relative'>
                    <div>
                        <p className='w-[220px] font-[600] text-[24px] text-[#1E2024]'>
                            Built-in Conversion
                        </p>
                    </div>
                    <div className='mt-4 pb-20 font-[400] text-sm text-[#08091A]'>
                        <p>- Swap between currencies and stablecoins at live rates</p>
                        <p>- Avoid market volatility by holding in stablecoins..</p>

                    </div>
                    <div className='absolute right-1 md:right-25 top-49  h-[350px] w-[350px]'>
                        <img src={conversionImage} className='h-full w-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features