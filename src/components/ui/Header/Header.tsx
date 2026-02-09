import { useEffect, useState, useRef } from 'react';
import { Popover } from '../Popover/Popover';

export const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrollingDown(currentScroll > lastScrollTopRef.current);
      lastScrollTopRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`dark:bg-zinc-900 bg-zinc-100 h-12 fixed w-full z-20 top-0 start-0 border-b border-zinc-300 dark:border-zinc-700 ${isScrollingDown ? '-translate-y-12' : 'translate-y-0'} transition-transform duration-175`}
    >
      <div className="mx-auto h-full w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Library
        </div>
        <div className="flex items-center">{/* Center section */}</div>
        <div className="flex items-center">{/* Right section */}
          <Popover content={<div className="p-2 dark:bg-zinc-900 bg-zinc-100">Profile</div>}>
            <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-200">
              U
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};
