import React from 'react';

const BaseBlock = ({ title, onClose, children, className = '' }) => {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white p-10 text-black ${className}`}
    >
      <div className="mb-2.5 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-[#023047]">{title}</h2>
        <button
          onClick={onClose}
          className="text-xl text-gray-500 transition-colors duration-200 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default BaseBlock;
