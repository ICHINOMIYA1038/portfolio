import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="bg-white border border-black w-2/3 h-5/6 p-4 rounded-lg z-50">
        <div className="relative">
          <button
            className="absolute top-2 right-2 p-2 text-black hover:text-red-500 focus:outline-none"
            onClick={onClose}
          >
            Close
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
