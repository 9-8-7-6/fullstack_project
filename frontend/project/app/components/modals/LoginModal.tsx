'use client'

import Modal from "./Modal";

import { useState } from "react";

import useLoginModal from "@/app/hooks/useLoginModak";
import { log } from "console";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const LoginModal = useLoginModal()
    
    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Your email address" type="email" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl"/>

                <input placeholder="Your password" type="password" className="w-full px-4 h-[54px] border border-gray-300 rounded-xl"/>

                <div className="p-5 bg-project text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Test')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="Log in"
            content={content}
         />
    )
}

export default LoginModal;