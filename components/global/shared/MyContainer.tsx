import React from 'react';


interface MyContainerProps {
  children: React.ReactNode;
  className?: string; 
}

export default function MyContainer({ children, className  }:MyContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}