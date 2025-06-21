
import React from 'react';
import { SEARCH_ICON } from '../constants';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder = "Buscar artigos..." }) => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-node-content-bg text-node-text-primary border border-gray-600 rounded-full focus:ring-2 focus:ring-node-green focus:border-node-green outline-none transition-colors duration-200"
      />
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-node-text-secondary">
        {SEARCH_ICON}
      </div>
    </div>
  );
};

export default SearchInput;