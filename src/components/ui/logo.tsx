
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

export function Logo({ size = 'md', withText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };
  
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="https://github.com/devopenledger/openledger-assets/blob/main/Logo-Openledger.png?raw=true"
        alt="Openledger Institute Logo"
        className={`${sizeClasses[size]}`}
      />
      {withText && (
        <span className="text-openledger-text font-archivo font-extrabold text-lg md:text-xl">
          Openledger Institute
        </span>
      )}
    </Link>
  );
}
