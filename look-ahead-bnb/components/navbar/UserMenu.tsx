"use client"

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../Avatar"
import { useState, useCallback } from "react"
import MenuItem from "./MenuItem"

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => { }} className="hidden md:block text-sm lg:text-base font-semibold py-3 px-4 rounded-full hover:bg-amber-100 transition cursor-pointer">
                    Look-Ahead
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-orange-200 overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={() => { }} label="Sign In" />
                            <MenuItem onClick={() => { }} label="Sign Up" />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu
