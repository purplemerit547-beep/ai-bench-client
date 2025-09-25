import React from 'react';
import ModelCard from './ModelCard';

const FeaturedModels = () => {
  const recommendedIcon = (
    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
      <path d="M13.0274 10.7417L14.2899 17.8467C14.3041 17.9303 14.2923 18.0163 14.2563 18.0931C14.2202 18.1699 14.1616 18.2339 14.0882 18.2765C14.0148 18.3191 13.9302 18.3382 13.8456 18.3314C13.761 18.3246 13.6805 18.2921 13.6149 18.2383L10.6316 15.9992C10.4876 15.8916 10.3126 15.8334 10.1328 15.8334C9.95306 15.8334 9.77811 15.8916 9.63409 15.9992L6.64575 18.2375C6.58019 18.2912 6.4998 18.3236 6.41533 18.3305C6.33086 18.3373 6.24631 18.3182 6.17297 18.2757C6.09963 18.2333 6.04098 18.1694 6.00485 18.0928C5.96872 18.0161 5.95683 17.9303 5.97075 17.8467L7.23242 10.7417" stroke="#EFB100" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1299 11.6667C12.8913 11.6667 15.1299 9.42808 15.1299 6.66666C15.1299 3.90523 12.8913 1.66666 10.1299 1.66666C7.36846 1.66666 5.12988 3.90523 5.12988 6.66666C5.12988 9.42808 7.36846 11.6667 10.1299 11.6667Z" stroke="#EFB100" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const openSourceIcon = (
    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
      <path d="M13.8433 5.83334H18.8433V10.8333" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.8434 5.83334L11.7601 12.9167L7.59342 8.75001L2.17676 14.1667" stroke="#00C950" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const costEffectiveIcon = (
    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
      <path d="M10.52 1.66666V18.3333" stroke="#2B7FFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6867 4.16666H8.43669C7.66314 4.16666 6.92127 4.47395 6.37429 5.02093C5.82731 5.56791 5.52002 6.30978 5.52002 7.08332C5.52002 7.85687 5.82731 8.59874 6.37429 9.14572C6.92127 9.6927 7.66314 9.99999 8.43669 9.99999H12.6034C13.3769 9.99999 14.1188 10.3073 14.6657 10.8543C15.2127 11.4012 15.52 12.1431 15.52 12.9167C15.52 13.6902 15.2127 14.4321 14.6657 14.9791C14.1188 15.526 13.3769 15.8333 12.6034 15.8333H5.52002" stroke="#2B7FFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const models = [
    {
      title: "GPT-4o",
      organization: "OpenAI",
      description: "Advanced multimodal model with vision, text, and audio capabilities",
      score: 91.7,
      badge: { type: 'api' as const, label: 'API' },
      capabilities: ["Text Generation", "Vision", "Code", "+2 more"],
      icon: recommendedIcon,
      featured: true,
      categoryTitle: "Recommended"
    },
    {
      title: "Llama 3.1 405B",
      organization: "Meta",
      description: "Largest open-source language model with exceptional performance",
      score: 91.0,
      badge: { type: 'open-source' as const, label: 'Open Source' },
      capabilities: ["Text Generation", "Code", "Math", "+2 more"],
      icon: openSourceIcon,
      categoryTitle: "Open Source"
    },
    {
      title: "Gemini 1.5 Pro",
      organization: "Google",
      description: "Multimodal model with long context and efficient processing",
      score: 87.7,
      badge: { type: 'api' as const, label: 'API' },
      capabilities: ["Text Generation", "Vision", "Audio", "+2 more"],
      icon: costEffectiveIcon,
      categoryTitle: "Cost Effective"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center bg-[#F6F3FF] dark:bg-[#232136] px-20 py-16 max-md:px-10 max-md:py-12 max-sm:px-5 max-sm:py-8">
      <div className="w-full max-w-screen-xl">
        <h2 className="text-3xl font-semibold leading-9 text-neutral-950 dark:text-white text-center mb-4 max-sm:text-2xl max-sm:leading-[30px]">
          Featured Models
        </h2>
        
        <p className="text-base font-normal leading-6 text-[#717182] dark:text-white text-center mb-[76px]">
          Discover the best AI models across different categories and use cases
        </p>
        
        <div className="flex gap-6 justify-center items-start max-md:flex-col max-md:items-center max-md:gap-8">
          {models.map((model, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-lg font-normal leading-7 text-neutral-950 dark:text-white mb-4">
                {model.categoryTitle}
              </h3>
              <ModelCard {...model} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
