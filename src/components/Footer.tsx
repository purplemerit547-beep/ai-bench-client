import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "AIBench",
      description: "Transparent AI model comparisons and benchmarks for better decision making.",
      isMain: true
    },
    {
      title: "Resources",
      links: ["Documentation", "Benchmarks", "Pricing Guide"]
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Privacy Policy"]
    },
    {
      title: "Connect",
      links: ["GitHub", "Twitter", "Discord"]
    }
  ];

  return (
    <footer className="w-full bg-[#F6F3FF] pt-[48.67px] pb-[47.99px] px-20 border-t-[0.667px] border-t-[rgba(0,0,0,0.10)] border-solid max-md:p-10 max-sm:px-5 max-sm:py-8">
      <div className="w-full max-w-screen-xl relative mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="max-md:mb-8 max-sm:mb-6">
              <h4 className="text-base font-normal leading-6 text-neutral-950 mb-4">
                {section.title}
              </h4>
              
              {section.isMain ? (
                <p className="text-sm font-normal leading-5 text-[#717182]">
                  {section.description}
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  {section.links?.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      className="text-base font-semibold leading-6 text-[#717182] cursor-pointer transition-colors duration-200 hover:text-neutral-950 text-left"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-full flex items-center justify-center pt-[33px] border-t-[0.667px] border-t-[rgba(0,0,0,0.10)] border-solid max-md:pt-6 max-sm:pt-4">
          <p className="text-sm font-normal leading-5 text-[#717182] text-center">
            © 2024 AIBench. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
