'use client';

import { useState } from 'react';
import { GithubIcon, LinkedinIcon, FacebookIcon, MailIcon } from 'lucide-react';

const contactData = [
  {
    label: 'Email',
    tooltipText: 'manhdungtran.vnuuet@gmail.com',
    link: 'mailto:manhdungtran.vnuuet@gmail.com',
    icon: <MailIcon size={24} />,
  },
  {
    label: 'GitHub',
    tooltipText: 'dncmaduro',
    link: 'https://github.com/dncmaduro',
    icon: <GithubIcon size={24} />,
  },
  {
    label: 'LinkedIn',
    tooltipText: 'maduro3992',
    link: 'https://www.linkedin.com/in/maduro3992',
    icon: <LinkedinIcon size={24} />,
  },
  {
    label: 'Facebook',
    tooltipText: 'Mạnh Dũng',
    link: 'https://www.facebook.com/maduro3992',
    icon: <FacebookIcon size={24} />,
  },
];

export const FloatingContacts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div
        className={`
        flex flex-col space-y-4 mb-4 
        transition-all duration-300 ease-out 
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      >
        {contactData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative group 
              rounded-full p-3 bg-neutral-600 text-white shadow-lg 
              hover:bg-neutral-700 flex items-center justify-center 
              transition-colors duration-200
            "
            aria-label={item.label}
          >
            {item.icon}
            <span
              className="
              absolute right-full mr-3 px-3 py-1 
              bg-gray-800 text-white text-sm rounded-md 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-200 
              whitespace-nowrap 
              pointer-events-none 
            "
            >
              {item.tooltipText}
            </span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-neutral-400">Contact me</span>
        <button
          onClick={() => setOpen(!open)}
          className="
          w-14 h-14 rounded-full bg-neutral-500 text-white shadow-xl 
          flex items-center justify-center hover:bg-neutral-600 
          transition-colors duration-200 
          focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-75
        "
          aria-expanded={open}
          aria-label={open ? 'Đóng các tùy chọn liên hệ' : 'Mở các tùy chọn liên hệ'}
        >
          <span className="text-xl font-bold">{open ? '×' : '+'}</span>
        </button>
      </div>
    </div>
  );
};
