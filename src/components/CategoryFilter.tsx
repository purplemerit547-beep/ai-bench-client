import React, { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'All');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex gap-2 items-center max-md:flex-wrap max-md:justify-center max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:-mx-5 max-sm:px-5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`h-[33px] flex items-center justify-center cursor-pointer transition-all duration-200 px-[16.66px] py-[8.66px] rounded-lg ${
            activeCategory === category
              ? 'bg-gradient-to-r from-purple-600 to-blue-600'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <span className={`text-xs font-semibold leading-4 text-center ${
            activeCategory === category ? 'text-white' : 'text-[#030213]'
          }`}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
