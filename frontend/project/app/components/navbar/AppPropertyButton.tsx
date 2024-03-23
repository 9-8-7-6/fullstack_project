'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal"
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
    userId?: string | null;

}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal()
    const addPropertyModal = useAddPropertyModal();
    
    const projectYourHome = () => {
        if (userId){
            addPropertyModal.open()
        } else {
            loginModal.open();
        }
    }
    return (
        <div 
            onClick={projectYourHome}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Project
        </div>
    )
}

export default AddPropertyButton