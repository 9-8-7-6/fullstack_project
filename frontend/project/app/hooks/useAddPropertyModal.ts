import { create } from "zustand";

interface AddpropertyModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
 
const useAddPropertyModal = create<AddpropertyModalStore>((set) => ({
    isOpen:false,
    open: () =>set({ isOpen: true }),
    close: () => set({isOpen:false})
}));

export default useAddPropertyModal;