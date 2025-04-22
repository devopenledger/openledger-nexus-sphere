import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-4',
    md: 'h-6',
    lg: 'h-8',
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
