import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";

const LeaderboardPreview = () => {
  const categories = [
    "All",
    "Text",
    "Image",
    "Audio",
    "Video",
    "Reasoning",
    "Multi-Modal",
  ];

  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && document.body.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const leaderboardData = [
    {
      rank: 1,
      model: "o1-preview",
      category: "reasoning",
      organization: "OpenAI",
      score: 92.5,
      license: "API",
    },
    {
      rank: 2,
      model: "GPT-4o",
      category: "multimodal",
      organization: "OpenAI",
      score: 91.7,
      license: "API",
    },
    {
      rank: 3,
      model: "Claude 3.5 Sonnet",
      category: "multimodal",
      organization: "Anthropic",
      score: 91.5,
      license: "API",
    },
    {
      rank: 4,
      model: "Llama 3.1 405B",
      category: "text",
      organization: "Meta",
      score: 91.0,
      license: "Open Source",
    },
    {
      rank: 5,
      model: "Midjourney v6",
      category: "image",
      organization: "Midjourney",
      score: 90.1,
      license: "Commercial",
    },
  ];

  const handleCategoryChange = (category: string) => {
    console.log("Leaderboard category:", category);
  };

  return (
    <section className="w-full flex flex-col items-center px-20 py-16 max-md:px-10 max-md:py-12 max-sm:px-4 max-sm:py-6 dark:bg-black">
      <h2 className="text-3xl font-semibold leading-9 text-neutral-950 dark:text-white text-center mb-4 max-sm:text-2xl max-sm:leading-[30px]">
        Leaderboard Preview
      </h2>

      <p className="text-base font-normal leading-6 text-[#717182] dark:text-white text-center mb-[60px]">
        Top performing models across different modalities
      </p>

      <div className="w-full max-w-6xl relative bg-white dark:bg-black p-6 rounded-xl border border-gray-300 dark:border-gray-700 overflow-x-auto max-sm:p-4">
        <h4 className="text-base font-semibold leading-4 text-neutral-950 dark:text-white mb-2">
          Top Models
        </h4>

        <p className="text-base font-normal leading-6 text-[#717182] dark:text-white mb-8">
          Ranked by overall performance scores
        </p>

        <div className="absolute right-6 top-7 max-md:static max-md:mb-6">
          <CategoryFilter
            categories={categories}
            onCategoryChange={handleCategoryChange}
            isDark={isDark}
          />
        </div>

        <div className="w-full min-w-[800px]">
          <div className="w-full h-10 flex items-center border-b border-gray-200 dark:border-gray-700 max-md:text-xs">
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white min-w-[60px] text-center">
              Rank
            </div>
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white flex-1 text-center">
              Model
            </div>
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white flex-1 text-center">
              Organization
            </div>
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white flex-1 text-center">
              Score
            </div>
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white min-w-[100px] text-center">
              License
            </div>
            <div className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white flex-1 flex justify-end">
              Actions
            </div>
          </div>

          <div className="w-full">
            {leaderboardData.map((item, index) => (
              <div
                key={index}
                className="flex w-full h-[57px] items-center relative border-b border-gray-200 dark:border-gray-700 max-md:text-xs"
              >
                <div
                  className={`min-w-[60px] h-[21px] flex items-center justify-center rounded-lg ${
                    item.rank === 1
                      ? "bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)]"
                      : "bg-[#F1EBFF] dark:bg-[#232136]"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold leading-4 text-center ${
                      item.rank === 1
                        ? "text-white"
                        : "text-[#232136] dark:text-[#C3C2D4]"
                    }`}
                  >
                    #{item.rank}
                  </span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center">
                  <div className="text-sm font-normal leading-5 text-neutral-950 dark:text-white capitalize">
                    {item.model}
                  </div>
                  <div className="text-sm font-normal leading-5 text-[#717182] dark:text-white capitalize">
                    {item.category}
                  </div>
                </div>
                
                <div className="flex-1 text-sm font-normal leading-5 text-neutral-950 dark:text-white text-center">
                  {item.organization}
                </div>
                
                <div className="flex-1 text-sm font-normal leading-5 text-neutral-950 dark:text-white text-center">
                  {item.score}
                </div>
                
                <div className="min-w-[100px] h-[21px] border flex items-center justify-center px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-[#F1EBFF] dark:bg-[#232136]">
                  <span className="text-xs font-semibold leading-4 text-neutral-950 dark:text-white text-center">
                    {item.license}
                  </span>
                </div>
                
                <div className="flex-1 flex gap-2 justify-end">
                  <button className="w-14 h-8 border flex items-center justify-center cursor-pointer transition-all duration-200 bg-white dark:bg-black rounded-lg border-solid border-[rgba(0,0,0,0.10)] hover:bg-gray-50 dark:hover:bg-black">
                    <span className="text-sm font-semibold leading-5 text-center text-neutral-950 dark:text-white">
                      View
                    </span>
                  </button>
                
                  <button className="w-[82px] h-8 flex items-center justify-center cursor-pointer transition-all duration-200 bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] rounded-lg hover:opacity-90">
                    <span className="text-sm font-semibold leading-5 text-center text-white">
                      Compare
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-[197px] h-9 flex items-center justify-center gap-[15.691px] cursor-pointer transition-all duration-200 mt-10 mx-auto bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] rounded-lg hover:opacity-90">
          <span className="text-sm font-semibold leading-5 text-center text-white">
            View Full Leaderboard
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.81323 8.66003H13.1466"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.47998 3.99341L13.1466 8.66008L8.47998 13.3267"
              stroke="white"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
