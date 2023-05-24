import React, { useContext, ReactNode, useEffect, useRef } from 'react';
import { ModalContext } from './ModalContext';
import { XMarkIcon } from '@heroicons/react/24/solid'

type ModalProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const Modal: React.FC<ModalProps> = ({ children, size = 'medium' }) => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const modalSizeClass = size === 'small' ? 'max-w-sm' : size === 'large' ? 'max-w-4xl' : '';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className={`relative bg-white rounded-lg ${modalSizeClass}`} ref={modalRef}>
          <div className="absolute top-3 right-3">
            <button
              className="bg-white rounded-full p-1 z-60"
              onClick={closeModal}
            >
              <XMarkIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
