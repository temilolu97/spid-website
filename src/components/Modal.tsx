import React from 'react'

interface ModalProps {
    modalBg?:string
    modalWidth?:string;
    modalHeight?:string;
    isOpen: boolean
    title?: string,
    subTitle?: string,
    onClose: () => void
    children: React.ReactNode
    footer?: React.ReactNode,
    headerStyles?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, subTitle, onClose, children, footer, headerStyles, modalWidth ="max-w-lg", modalHeight="max-h-[70vh]" }) => {
    if (!isOpen) return null

    return (
        <div className="fixed font-geist inset-0 z-50 flex items-center justify-center bg-black/50 " onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className={`bg-gradient-to-b from-[#E5E5FF] to-white rounded-2xl overflow-hidden shadow-xl w-full ${modalWidth} ${modalHeight}  mx-4 max-h-[70vh] flex flex-col`}>
                {/* Header */}
                <div className={`${headerStyles} flex justify-between items-start px-6.5 pt-6`}>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-[#97989B] font-[400] text-[16px]">{subTitle}</p>
                    </div>
                    {/* <button onClick={onClose} className="ml-4 mt-1 border border-[#EAEBEB] rounded bg-gradient-to-b from-white to-[#E5E5FF] h-[2.1rem] w-[2.1rem] text-gray-600 hover:text-gray-900 text-2xl">
                        &times;
                    </button> */}
                    <div onClick={onClose} className='flex items-center justify-center  h-13 aspect-square rounded-full bg-spid-inactive border-1.5 border-white'>
                        <div className='flex items-center justify-center font-[400] text-white text-[16px] h-[27px] text- aspect-square bg-spid-primary rounded-full'>
                            &times;
                        </div>
                    </div>
                </div>

                {/* Scrollable Body */}
                <div className="px-4 py-2 overflow-y-auto flex-1">
                    {children}
                </div>

                {/* Footer (Sticky at bottom) */}
                {footer && (
                    <div className="border-t px-4 py-2">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}


export default Modal