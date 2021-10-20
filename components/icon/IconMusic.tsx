import React from 'react';

const IconMusic: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.58 34.57"
      className={`fill-current text-blue-900 ${className ? className : ''}`}
    >
      <path d="M8.25 21.6c1.58 1.4 1.23 4.4-.78 6.6S2.56 31.08 1 29.65s-1.23-4.37.78-6.6 4.91-2.87 6.48-1.45M26.59 25.76c1.58 1.42 1.23 4.38-.78 6.6s-4.91 2.88-6.49 1.46-1.22-4.38.78-6.61 4.91-2.87 6.49-1.45" />
      <path d="m7.7 0 19.88 4.81v23.42h-1.62V9.2L9.15 5.04l.09 19.08H7.7V0z" />
    </svg>
  );
};

export default IconMusic;
