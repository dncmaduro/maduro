'use client';

import { About } from '@/components/tabs/about';
import { FloatingContacts } from '@/components/tabs/contact';
import { Projects } from '@/components/tabs/projects';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Home() {
  const [tab, setTab] = useState('about');
  const [displayTab, setDisplayTab] = useState(tab);
  const [isFading, setIsFading] = useState(false);

  const tabs = ['about', 'projects'];

  useEffect(() => {
    if (tab !== displayTab) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setDisplayTab(tab);
        setIsFading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [tab, displayTab]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="h-15 w-full shadow-b-lg fixed top-0 bg-neutral-900 flex items-center justify-center z-10">
        {' '}
        <div className="flex h-full items-center w-full max-w-7xl px-4">maduro.dev</div>{' '}
        <div className="flex items-center gap-8 px-4">
          {' '}
          {tabs.map(t => (
            <Button
              key={t}
              onClick={() => setTab(t)}
              className={`
                text-sm font-medium 
                ${tab === t ? 'text-white' : 'text-neutral-500'}
                hover:text-white transition-colors duration-200
              `}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center w-full mt-15">
        {' '}
        <div
          className={`
          transition-opacity duration-300 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          } w-full p-4 `}
        >
          {displayTab === 'about' && <About />}
          {displayTab === 'projects' && <Projects />}
        </div>
      </div>

      <FloatingContacts />
    </div>
  );
}
