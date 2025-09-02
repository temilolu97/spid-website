import React from 'react'
import personalIcon from '../assets/Icon (1).png'
import businessIcon from '../assets/Icon (2).png'
import { Check } from 'lucide-react'
import Button from './Button'

const ChooseRightAccount = () => {
    return (
        <div>
            <div className='flex justify-center my-[112px] mb-15'>
                <div className='max-w-[500px] text-center'>
                    <h4 className='font-[700] text-[44px]'>Choose the right account for you</h4>
                    <p>Whether you’re managing personal finances or handling client payments, Spid makes it simple, secure, and seamless.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
                <div className='flex justify-end'>
                    <div className='bg-gradient-to-b from-white to-[#E5E5FF] border border-[#D2D6DA] p-10 rounded-[14.16px]'>
                        <img src={personalIcon} className='h-[45px] aspect-square' />
                        <div className='mt-6 mb-10'>
                            <h5 className='text-[#1B223C] font-[500] text-[22px] mb-3'>Personal</h5>
                            <p className='text-[#6E7073] font-[400] text-[16px]'>Unleash the Power of Your Business with Pro Plan.</p>
                        </div>
                        <div className='mb-10'>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Multi-wallet access</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Easy onboarding & KYC</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Instant global transfers</p>
                            </div>
                        </div>
                        <div className='mt-15'>
                            <Button onClick={() => { }} className='bg-spid-primary font-[600] text-[14.16px] text-[#F7F8FF] w-full' text='Get Started' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className='bg-gradient-to-b from-[#D8CCFF] via-[#F5EEFF] to-white border border-[#D2D6DA] p-10 rounded-[14.16px]'>
                        <img src={businessIcon} className='h-[45px] aspect-square' />
                        <div className='mt-6 mb-10'>
                            <div className='flex items-center mb-3 gap-3'>
                                <h5 className='text-[#1B223C] font-[500] text-[22px]'>Business</h5>
                                <div className='text-[12.13px] font-[600] text-[#F7F8FF] max-w-[94px] border rounded-[6.14px] py-[5.2px] px-[7.67px] whitespace-nowrap bg-gradient-to-r from-[#656A93] via-[#B7BACF] to-[#656A93]'>
                                    Most Popular
                                </div>
                            </div>
                            <p className='text-[#6E7073] font-[400] text-[16px]'>Take Your Business to the Next Level with Business Plan.</p>
                        </div>
                        <div className='mb-10'>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Team-based accounts </p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Documented entity registration</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <Check size={20} color='#5962F1' />
                                <p className='font-[400] text-[#1B223C] text-[16px]'>Currency allocation & reporting</p>
                            </div>
                        </div>
                        <div className='mt-15'>
                            <Button onClick={() => { }} className='bg-spid-primary font-[600] text-[14.16px] text-[#F7F8FF] w-full' text='Get Started' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRightAccount