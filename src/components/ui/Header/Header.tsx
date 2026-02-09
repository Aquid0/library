import { useEffect, useState, useRef } from 'react';
import { Popover } from '../Popover/Popover';

export const Header = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollTopRef = useRef(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedin, setIsLoggedin] = useState(false); // Placeholder for authentication state

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

  const profileContent = (
    <div className="p-2 dark:bg-zinc-900 bg-zinc-100 flex flex-col gap-3 rounded w-64">
      {!isLoggedin ? (
        <>
          <input
            className="bg-zinc-200 dark:bg-zinc-700 rounded px-2 py-1 text-sm text-zinc-900 dark:text-zinc-100"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-zinc-200 dark:bg-zinc-700 rounded px-2 py-1 text-sm text-zinc-900 dark:text-zinc-100"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm"> 
              Sign Up
            </button>
           <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm"> 
              Login
            </button>
          </div>
        </>
      ) : <div/>}
    </div>
  )

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
          <Popover content={profileContent}>
            <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400 transition-colors duration-200">
              U
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};
