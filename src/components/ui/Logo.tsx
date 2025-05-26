import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8' }) => {
  return <img src="/images/Stigg.png" alt="Stigg Security" className={className} />;
};

export default Logo;