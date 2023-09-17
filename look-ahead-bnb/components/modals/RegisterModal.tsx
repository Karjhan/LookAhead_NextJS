"use client"

import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@/utils/hooks/UseRegisterModal"
import Modal from "./Modal"
import { newspaper } from '@/utils/ModalAnimations'
import Heading from "../Heading"
import localFont from 'next/font/local'
import Input from "../inputs/Input"
import { toast } from "react-hot-toast"
import Button from "../Button"

const fataisie = localFont({
    src: "../../public/fonts/FantaisieArtistique.ttf",
    variable: "--font-fantaisie"
})

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data),
        }).then(() => {
            registerModal.onClose()
        }).catch((error) => {
            toast.error("Something went wrong!")
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
    }, [registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title={(<p>Welcome to <span className={`${fataisie.className} font-medium text-3xl text-orange-300`}>Look-Ahead-BnB</span></p>)} subtitle="Register your new account!" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            {errors["email"] && (
                <p className="text-rose-500 text-semibold text-md pl-3">{errors["email"].message}</p>
            )}
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            {errors["name"] && (
                <p className="text-rose-500 text-semibold text-md pl-3">{errors["name"].message}</p>
            )}
            <Input id="password" type={"password"} label="Password" disabled={isLoading} register={register} errors={errors} required />
            {errors["password"] && (
                <p className="text-rose-500 text-semibold text-md pl-3">{errors["password"].message}</p>
            )}
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => { }} />
            <Button outline label="Continue with GitHub" icon={AiFillGithub} onClick={() => { }} />
            <div className="text-orange-200 text-center mt-4 font-light">
                <p>Already have an account? 
                    <span onClick={onToggle} className="text-orange-300 cursor-pointer hover:underline pl-2">Log in</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal footer={footerContent} body={bodyContent} animation={newspaper} disabled={isLoading} isOpen={registerModal.isOpen} title="Register Form" actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} secondaryAction={() => { }} />
    )
}

export default RegisterModal
