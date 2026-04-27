import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8' }) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stigg Security"
    >
      {/* Shield icon */}
      <path
        d="M16 4L4 9v7c0 7.73 5.12 14.97 12 17 6.88-2.03 12-9.27 12-17V9L16 4z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M16 4L4 9v7c0 7.73 5.12 14.97 12 17 6.88-2.03 12-9.27 12-17V9L16 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 15l3 3 5-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* STIGG text */}
      <text
        x="36"
        y="22"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="2"
        fill="currentColor"
      >
        STIGG
      </text>
      {/* SECURITY text */}
      <text
        x="36"
        y="34"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="4"
        fill="currentColor"
        opacity="0.7"
      >
        SECURITY
      </text>
    </svg>
  );
};

export default Logo;
