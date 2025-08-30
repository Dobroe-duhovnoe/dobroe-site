import React from 'react';

const BaseBlock = ({ title, onClose, children, className = '' }) => {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-7 text-black ${className}`}
    >
      <div className="mb-2.5 flex items-start justify-between">
        <h2 className="flex-1 text-left text-[1.75rem] font-bold text-[#023047]">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="cursor-pointer text-xl text-[#023047] transition-colors duration-200 hover:opacity-90"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default BaseBlock;
