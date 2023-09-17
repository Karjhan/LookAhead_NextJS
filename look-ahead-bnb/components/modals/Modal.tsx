"use client"

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps{
    isOpen?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: string,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    actionLabel?: string,
    disabled?: boolean,
    secondaryAction?: () => void,
    secondaryActionLabel?: string,
    animation: object
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    animation
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return
        }
        setShowModal(false);
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, isOpen])
    
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }
        onSubmit()
    }, [disabled, onSubmit])
    
    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return
        }
        secondaryAction()
    }, [disabled, secondaryAction])
    
    if (!isOpen) {
        return null
    }

    return (
        <>
            <AnimatePresence >
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                    <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                        <div className={`translate duration-300 ${showModal ? 'translate-y-0' : 'translate-y-full'} ${showModal ? "opacity-100" : "opacity-0"} h-full`}>
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="duration-300 h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none"
                                variants={animation}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="flex items-center p-6 rounded-t justify-center relative border-b-[2px] text-orange-200">
                                    <motion.button whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }} onClick={handleClose} className="p-1 border-0 hover:opacity-80 transition absolute left-9">
                                        <IoMdClose size={20} color={"wheat"} />
                                    </motion.button>
                                    <div className="text-lg font-semibold">
                                        {title}
                                    </div>
                                </div>
                                <div className="realtive p-6 flex-auto">
                                    {body}
                                </div>
                                <div className="flex flex-col gap-2 p-6">
                                    <div className="flex flex-row items-center gap-4 w-full">
                                        {secondaryActionLabel && (
                                            <Button outline disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} />
                                        )}
                                        <Button gradientBorder={true} disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                                    </div>
                                    {footer}
                                </div>
                            </motion.div>
                        </div>
                        
                    </div>
                </div>
            </AnimatePresence>
        </>
    )
}

export default Modal

