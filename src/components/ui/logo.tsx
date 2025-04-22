import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://github.com/devopenledger/openledger-assets/blob/main/Logo-Openledger.png?raw=true"
        alt="Openledger Logo"
        className={`${sizeClasses[size]}`}
      />
    </Link>
  );
}
