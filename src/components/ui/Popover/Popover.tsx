import { useEffect, useState, useRef, useCallback } from 'react';
import { PopoverProps } from './types';

export const Popover = ({ children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isLeftAligned, setIsLeftAligned] = useState(true);

  const checkAlignment = useCallback(() => {
    if (!popoverRef.current) return;
    const rect = popoverRef.current.getBoundingClientRect();
    setIsLeftAligned(rect.right <= window.innerWidth);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !popoverRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsVisible(false);
      }
    };

    checkAlignment();
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', checkAlignment);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', checkAlignment);
    };
  }, [isVisible, checkAlignment]);

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
          className={`absolute z-50 mt-2 bg-white rounded-lg shadow-lg ${isLeftAligned ? 'left-0' : 'right-0'}`}
          aria-modal="true"
        >
          {content}
        </div>
      )}
    </div>
  );
};
