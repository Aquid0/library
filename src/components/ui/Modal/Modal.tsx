import { useEffect } from "react";
import { ModalProps } from "./types";

export const Modal = ({ title, content, footerActions, isOpen, onClose }: ModalProps) => {
    if (!isOpen) return null;

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleEscape);
        
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    })

    return (
        <>
            {/* Modal backdrop */}
            <div className="w-full h-full fixed top-0 left-0 flex bg-black/75 items-center justify-center z-50" onClick={onClose}>
                {/* Modal content */}
                <div className="flex flex-col p-5 rounded-lg bg-white dark:bg-zinc-900" onClick={(e) => e.stopPropagation()}>
                    {/* Close button */}
                    <div className="flex justify-between items-center mb-4">
                        {title}
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            &times;
                        </button>
                    </div>

                    {/* Main Content */}
                    {content}

                    {/* Footer Actions */}
                    <div className="mt-4 flex justify-end"> 
                        <button onClick={onClose} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                            Close
                        </button>
                        {footerActions && footerActions.map((action, index) => (
                            <span key={index}>{action}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};