import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border border-slate-200 transition-all duration-300 hover:border-brand-accent/50 hover:shadow-2xl hover:shadow-brand-accent/10 ${className}`}>
      {children}
    </div>
  );
};

export default Card;