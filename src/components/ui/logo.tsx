import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
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
