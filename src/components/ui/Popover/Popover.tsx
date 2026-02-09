import { useEffect, useState, useRef } from 'react';
import { PopoverProps } from './types';

export const Popover = ({ children, content }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

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
    <div
      className="popover-container"
      ref={triggerRef}
      onClick={() => setIsVisible(!isVisible)}
      aria-haspopup="true"
      aria-expanded={isVisible}
      aria-controls="popover-content"
    ></div>
  );
};
