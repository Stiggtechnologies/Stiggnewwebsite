import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8' }) => {
  return (
    <div className="flex items-center space-x-2">
      <Shield className={`text-accent-500 ${className}`} />
      <span className="font-bold text-xl text-white">Stigg</span>
    </div>
  );
};

export default Logo;