import { useEffect, useState, useRef } from 'react';
import { PopoverProps } from './types';

export const Popover = ({ children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        onClick={() => setIsVisible(!isVisible)}
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content"
        className="focus:outline-none border-none bg-transparent p-0 cursor-pointer"
      >
        {children}
      </button>
      {isVisible && (
        <div
          ref={popoverRef}
          id="popover-content"
          role="dialog"
          className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg"
          aria-modal="true"
        >
          {content}
        </div>
      )}
    </div>
  );
};
