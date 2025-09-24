import React from 'react';

const Navigation = () => {
  return (
    <nav className="box-border flex items-center w-full h-16 px-20 py-4 max-md:px-10 max-sm:px-5 relative">
      <div className="box-border w-8 h-8 flex items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] mr-2 z-10">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33325 11.6667C3.17555 11.6672 3.02094 11.623 2.88737 11.5391C2.75381 11.4553 2.64677 11.3353 2.5787 11.193C2.51063 11.0508 2.48432 10.8921 2.50283 10.7355C2.52133 10.5789 2.5839 10.4308 2.68325 10.3083L10.9332 1.80833C10.9951 1.73689 11.0795 1.68862 11.1724 1.67144C11.2653 1.65425 11.3613 1.66917 11.4447 1.71375C11.528 1.75832 11.5937 1.82991 11.631 1.91675C11.6683 2.00359 11.675 2.10053 11.6499 2.19166L10.0499 7.20833C10.0027 7.3346 9.98689 7.47043 10.0037 7.60417C10.0206 7.7379 10.0696 7.86556 10.1467 7.97618C10.2237 8.0868 10.3264 8.17709 10.446 8.23929C10.5656 8.3015 10.6984 8.33377 10.8332 8.33333H16.6666C16.8243 8.33279 16.9789 8.37701 17.1124 8.46084C17.246 8.54468 17.3531 8.6647 17.4211 8.80695C17.4892 8.94919 17.5155 9.10784 17.497 9.26444C17.4785 9.42105 17.4159 9.56919 17.3166 9.69166L9.06658 18.1917C9.00469 18.2631 8.92036 18.3114 8.82743 18.3285C8.73449 18.3457 8.63848 18.3308 8.55514 18.2862C8.4718 18.2417 8.40609 18.1701 8.3688 18.0832C8.33151 17.9964 8.32485 17.8995 8.34991 17.8083L9.94991 12.7917C9.99709 12.6654 10.0129 12.5296 9.99609 12.3958C9.97924 12.2621 9.9302 12.1344 9.85317 12.0238C9.77614 11.9132 9.67343 11.8229 9.55385 11.7607C9.43426 11.6985 9.30137 11.6662 9.16658 11.6667H3.33325Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex items-center justify-center w-full absolute left-0 top-0 h-full pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="text-lg font-normal leading-7 text-neutral-950 ml-2">
            AIBench
          </div>
          <div className="flex items-center gap-6 ml-6">
            <button className="text-base font-normal leading-6 text-[#717182] cursor-pointer transition-colors duration-200 hover:text-neutral-950">
              Home
            </button>
            <button className="text-base font-normal leading-6 text-[#717182] cursor-pointer transition-colors duration-200 hover:text-neutral-950">
              Leaderboard
            </button>
            <button className="text-base font-normal leading-6 text-[#717182] cursor-pointer transition-colors duration-200 hover:text-neutral-950">
              Benchmarks
            </button>
            <button className="text-base font-normal leading-6 text-[#717182] cursor-pointer transition-colors duration-200 hover:text-neutral-950">
              Pricing
            </button>
          </div>
        </div>
      </div>
      <div className="ml-auto flex items-center z-10">
        <button className="ml-6 cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 10.6667C9.47268 10.6667 10.6666 9.47277 10.6666 8.00001C10.6666 6.52725 9.47268 5.33334 7.99992 5.33334C6.52716 5.33334 5.33325 6.52725 5.33325 8.00001C5.33325 9.47277 6.52716 10.6667 7.99992 10.6667Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 1.33334V2.66668" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13.3333V14.6667" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.28662 3.28665L4.22662 4.22665" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.7734 11.7733L12.7134 12.7133" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.33325 8H2.66659" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 8H14.6666" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.22662 11.7733L3.28662 12.7133" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.7134 3.28665L11.7734 4.22665" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
