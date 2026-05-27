import React from 'react';

const BaseBlock = ({ title, onClose, children, className = '' }) => {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-4 text-black sm:p-7 ${className}`}
    >
      <div className="mb-2.5 flex items-start justify-between">
        <h2 className="flex-1 text-left text-xl font-bold text-[var(--color-primary-dark)] sm:text-[1.75rem]">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="cursor-pointer text-xl text-[var(--color-primary-dark)] transition-colors duration-200 hover:opacity-90"
        >
          ✕
        </button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default BaseBlock;
