import React, { useState } from 'react';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ 
  placeholder = "Search by model name...", 
  onSearch 
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <div className="w-full h-full relative flex items-center bg-white px-4 py-0 rounded-lg">
      <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
        <path d="M14.5401 14.33L11.6467 11.4367" stroke="#717182" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.87337 12.9967C10.8189 12.9967 13.2067 10.6089 13.2067 7.66335C13.2067 4.71783 10.8189 2.33002 7.87337 2.33002C4.92785 2.33002 2.54004 4.71783 2.54004 7.66335C2.54004 10.6089 4.92785 12.9967 7.87337 12.9967Z" stroke="#717182" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 text-sm font-normal text-[#717182] bg-transparent border-none outline-none placeholder:text-[#717182]"
      />
    </div>
  );
};

export default SearchInput;
