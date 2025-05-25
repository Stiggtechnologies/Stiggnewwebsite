import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8' }) => {
  return (
    <img 
      src="https://raw.githubusercontent.com/stackblitz/webcontainer-core/main/assets/stigg.svg" 
      alt="Stigg Security" 
      className={className}
    />
  );
};

export default Logo;