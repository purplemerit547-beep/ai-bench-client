// Only keep one import for React and Navigation/Footer
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Inline ModelHeader
const ModelHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-stretch max-md:max-w-full dark:bg-neutral-900">
      <button
        className="flex items-center gap-2 text-sm text-neutral-950 dark:text-white font-semibold text-center leading-none ml-3 max-md:ml-2.5 px-3 py-2 rounded-lg transition-all duration-200 w-fit group focus:outline-none
          hover:bg-[rgba(177,139,239,0.15)] hover:shadow-[0_2px_8px_0_rgba(177,139,239,0.15)]
          dark:hover:bg-[rgba(177,139,239,0.25)] dark:hover:shadow-[0_2px_8px_0_rgba(177,139,239,0.25)]"
        onClick={() => navigate("/leaderboard")}
        type="button"
      >
        <span
          className="flex items-center transition-transform duration-200 group-hover:-translate-x-1"
          aria-hidden="true"
        >
          {/* Arrow SVG with color adaptation */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M11.25 15L5.25 9L11.25 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-950 dark:text-white"
            />
          </svg>
        </span>
        <span className="transition-colors duration-200 group-hover:underline">
          Back to Leaderboard
        </span>
      </button>
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[34px] max-md:max-w-full">
        <div className="flex flex-col items-stretch whitespace-nowrap">
          <h1 className="text-neutral-950 dark:text-white text-3xl font-semibold leading-[1.2]">
            o1-preview
          </h1>
          <div className="flex items-stretch gap-[17px] mt-2">
            <div className="text-[rgba(113,113,130,1)] dark:text-white text-base font-normal grow">
              OpenAI
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/35de5dc00516421d9aa405b4c562fade/c7a1c35dc36315f508a4b2a4810cd39fbc514b3f?placeholderIfAbsent=true"
              alt="OpenAI Logo"
              className="aspect-[2.67] object-contain w-14 shrink-0 rounded-lg"
            />
            <div className="border flex flex-col overflow-hidden items-stretch text-xs text-neutral-950 dark:text-white font-semibold text-center leading-none justify-center px-2.5 py-[5px] rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
              <div>reasoning</div>
            </div>
          </div>
        </div>
        <div className="flex items-stretch gap-3 text-sm font-semibold text-center leading-none my-auto">
          <button className="bg-white dark:bg-neutral-900 border flex items-stretch gap-4 text-neutral-950 dark:text-white px-[13px] py-2.5 rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid hover:bg-gray-50 transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/35de5dc00516421d9aa405b4c562fade/e11eb3dd84d6396ef367ed03e41bf1618201bca2?placeholderIfAbsent=true"
              alt="Documentation icon"
              className="aspect-[1] object-contain w-4 shrink-0"
            />
            <div className="my-auto">Official Docs</div>
          </button>
          <button
            className="flex flex-col items-stretch justify-center px-4 py-[11px] rounded-lg bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] hover:opacity-90 transition-all duration-200 text-white font-semibold"
          >
            <div>Add to Compare</div>
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-900 border flex flex-col text-lg text-neutral-950 dark:text-white font-normal leading-loose justify-center mt-[34px] px-[25px] py-[30px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full">
          Reasoning-focused model designed for complex problem solving
        </div>
      </div>
    </section>
  );
};

// PerformanceRadar (from modelComparison.tsx)
const PerformanceRadar: React.FC = () => {
  return (
    <section className="box-border w-full border bg-white dark:bg-neutral-900 p-6 rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] max-md:w-full max-sm:p-4 overflow-x-auto">
      <header className="mb-6">
        <h3 className="text-neutral-950 dark:text-white text-xl font-semibold leading-7 mb-2">
          Performance Radar
        </h3>
        <p className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
          Multi-dimensional performance comparison
        </p>
      </header>
      <div className="mb-6 w-full overflow-x-auto">
        <div
          className="min-w-[350px] w-full dark:bg-neutral-900 rounded-lg"
          style={{ maxWidth: "100%", overflowX: "auto" }}
          dangerouslySetInnerHTML={{
            __html: `<svg width="100%" height="320" viewBox="0 0 544 321" fill="none" xmlns="http://www.w3.org/2000/svg" class="radar-chart" style="box-sizing: border-box; max-width: 100%; height: 320px; margin-bottom: 24px; display: block; background: transparent;">
              <style>
                @media (prefers-color-scheme: dark) {
                  .radar-chart .radar-grid { stroke: #333333 !important; }
                  .radar-chart .radar-label { fill: #BBBBBB !important; }
                  .radar-chart .radar-fill { fill: #fff !important; opacity: 0.08 !important; }
                }
              </style>
              <path class="radar-grid" d="M272.17 132.07L300.77 160.67L272.17 189.27L243.57 160.67L272.17 132.07Z" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 103.47L329.37 160.67L272.17 217.87L214.97 160.67L272.17 103.47Z" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 74.87L357.97 160.67L272.17 246.47L186.37 160.67L272.17 74.87Z" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 46.27L386.57 160.67L272.17 275.07L157.77 160.67L272.17 46.27Z" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 160.67V46.27" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 160.67H386.57" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 160.67V275.07" stroke="#CCCCCC"></path>
              <path class="radar-grid" d="M272.17 160.67H157.77" stroke="#CCCCCC"></path>
              <text class="radar-label" fill="#808080" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="247.506" y="37.5882">MMLU</tspan></text>
              <text class="radar-label" fill="#808080" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="394.57" y="164.248">HumanEval</tspan></text>
              <text class="radar-label" fill="#808080" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="243.857" y="290.908">GSM8K</tspan></text>
              <text class="radar-label" fill="#808080" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="66.5513" y="164.248">CLIP Score</tspan></text>
              <path class="radar-grid" d="M272.17 160.67V46.27" stroke="#CCCCCC"></path>
              <path class="radar-fill" d="M272.17 59.1972L375.359 160.67L272.17 270.265L166.808 160.67L272.17 59.1972Z" fill="black" fill-opacity="0.1"></path>
              <path class="radar-fill" d="M272.17 59.6548L377.418 160.67L272.17 270.952L170.125 160.67L272.17 59.6548Z" fill="black" fill-opacity="0.1"></path>
              <path class="radar-fill" d="M272.17 60.7988L373.986 160.67L272.17 271.409V160.67V60.7988Z" fill="black" fill-opacity="0.1"></path>
            </svg>`,
          }}
        />
      </div>
      <div className="flex h-6 items-start gap-2.5 w-full justify-center flex-wrap overflow-x-auto">
        <div className="flex h-6 justify-center items-end gap-1 text-neutral-950 dark:text-white text-center text-base font-normal leading-6 px-0 py-[1.33px] whitespace-nowrap">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="legend-icon" style="box-sizing: border-box; width: 14px; height: 14px">
                <style>
                  @media (prefers-color-scheme: dark) { .legend-rect { fill: #fff !important; opacity: 0.8 !important; } }
                </style>
                <rect class="legend-rect" x="0.79" y="2.08" width="14" height="10.5" fill="black"/>
              </svg>`,
            }}
          />
          <span className="text-neutral-950 dark:text-white text-center text-base font-normal leading-6">
            Claude 3.5 Sonnet
          </span>
        </div>
        <div className="flex h-6 justify-center items-end gap-1 text-neutral-950 dark:text-white text-center text-base font-normal leading-6 px-0 py-[1.33px] whitespace-nowrap">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="legend-icon" style="box-sizing: border-box; width: 14px; height: 14px">
                <style>
                  @media (prefers-color-scheme: dark) { .legend-rect { fill: #fff !important; opacity: 0.8 !important; } }
                </style>
                <rect class="legend-rect" x="0.8198" y="2.08" width="14" height="10.5" fill="black"/>
              </svg>`,
            }}
          />
          <span className="text-neutral-950 dark:text-white text-center text-base font-normal leading-6">
            GPT-4o
          </span>
        </div>
        <div className="flex h-6 justify-center items-end gap-1 text-neutral-950 dark:text-white text-center text-base font-normal leading-6 px-0 py-[1.33px] whitespace-nowrap">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="legend-icon" style="box-sizing: border-box; width: 14px; height: 14px">
                <style>
                  @media (prefers-color-scheme: dark) { .legend-rect { fill: #fff !important; opacity: 0.8 !important; } }
                </style>
                <rect class="legend-rect" x="0.54" y="2.08" width="14" height="10.5" fill="black"/>
              </svg>`,
            }}
          />
          <span className="text-neutral-950 dark:text-white text-center text-base font-normal leading-6">
            Llama 3.1 405B
          </span>
        </div>
      </div>
    </section>
  );
};

// Inline PerformanceOverview
const PerformanceOverview = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 border pt-7 pb-[40px] px-[25px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:max-w-full max-md:pb-[40px] max-md:px-5">
      <h2 className="text-neutral-950 dark:text-white font-semibold leading-none">
        Performance Overview
      </h2>
      <p className="text-[rgba(113,113,130,1)] dark:text-white mt-3.5 mb-6">
        Benchmark scores across different evaluation metrics
      </p>
      <PerformanceRadar />
    </section>
  );
};

// Inline BenchmarkTable
interface BenchmarkData {
  name: string;
  score: string;
  description: string;
}

const benchmarkData: BenchmarkData[] = [
  {
    name: "MMLU",
    score: "90.8%",
    description: "Massive Multitask Language Understanding",
  },
  {
    name: "HumanEval",
    score: "89.7%",
    description: "Code generation capabilities",
  },
  {
    name: "GSM8K",
    score: "97.1%",
    description: "Grade school mathematics",
  },
];

const BenchmarkTable = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 border flex w-full flex-col items-stretch text-sm font-normal mt-8 px-[25px] py-8 rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:max-w-full max-md:px-5">
      <h2 className="text-neutral-950 dark:text-white text-base font-semibold leading-none">
        Detailed Benchmarks
      </h2>
      <p className="text-[rgba(113,113,130,1)] dark:text-white text-base mt-3.5">
        Individual benchmark scores and explanations
      </p>

      <div className="overflow-x-auto">
        <table className="w-full mt-[25px]">
          <thead>
            <tr className="flex items-stretch gap-[40px_58px] text-neutral-950 dark:text-white font-semibold whitespace-nowrap leading-none px-2 py-[13px] max-md:max-w-full">
              <th className="text-left">Benchmark</th>
              <th className="text-left">Score</th>
              <th className="text-left grow shrink w-[480px] max-md:max-w-full">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {benchmarkData.map((benchmark) => (
              <tr
                key={benchmark.name}
                className="flex w-full items-stretch gap-[40px_100px] leading-none flex-wrap pl-2 pr-20 py-3 max-md:max-w-full max-md:pr-5"
              >
                <td className="text-neutral-950 dark:text-white">{benchmark.name}</td>
                <td className="flex items-stretch gap-[40px_56px]">
                  <div className="text-neutral-950 dark:text-white">{benchmark.score}</div>
                  <div className="text-[rgba(113,113,130,1)] dark:text-white basis-auto grow shrink">
                    {benchmark.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Inline ModelInfo
const ModelInfo = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 border flex w-full flex-col px-[25px] py-[29px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:px-5">
      <h2 className="text-neutral-950 dark:text-white text-base font-semibold leading-none">
        Model Information
      </h2>

      <div className="mt-[39px]">
        <h3 className="text-neutral-950 dark:text-white text-sm font-semibold leading-none">
          Released
        </h3>
        <p className="text-neutral-950 dark:text-white text-base font-normal mt-[13px]">
          September 12, 2024
        </p>
      </div>

      <div className="mt-[26px]">
        <h3 className="text-neutral-950 dark:text-white text-sm font-semibold leading-none">
          Type
        </h3>
        <p className="text-neutral-950 dark:text-white text-base font-normal mt-2.5">
          reasoning
        </p>
      </div>

      <div className="mt-[26px]">
        <h3 className="text-neutral-950 dark:text-white text-sm font-semibold leading-none">
          Overall Score
        </h3>
        <div className="self-stretch flex items-stretch gap-[11px] mt-[15px]">
          <div className="text-neutral-950 dark:text-white text-2xl font-normal leading-none grow">
            92.5
          </div>
          <div className="bg-[rgba(236,236,240,1)] dark:bg-neutral-900 grow shrink-0 basis-0 w-fit my-auto rounded-[22369600px] h-2">
            <div className="bg-[rgba(3,2,19,1)] flex shrink-0 h-2 rounded-[22369600px] w-[92.5%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Inline PricingCard
const PricingCard = () => {
  return (
    <section className="bg-white dark:bg-neutral-900 border flex w-full flex-col items-stretch font-semibold mt-6 px-[25px] py-[27px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:px-5">
      <h2 className="text-neutral-950 dark:text-white text-base leading-none">Pricing</h2>
      <p className="text-[rgba(113,113,130,1)] dark:text-white text-base font-normal mt-2.5">
        Cost information for API usage
      </p>

      <div className="flex items-stretch gap-4 font-normal text-center mt-[25px]">
        <div className="border flex flex-col items-stretch flex-1 pt-6 pb-[37px] px-[18px] rounded-[10px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
          <div className="text-neutral-950 dark:text-white text-2xl leading-none self-center">
            $15
          </div>
          <div className="text-[rgba(113,113,130,1)] dark:text-white text-sm leading-none mt-[9px]">
            per 1M input tokens
          </div>
        </div>
        <div className="border flex flex-col items-center flex-1 px-8 py-[23px] rounded-[10px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:px-5">
          <div className="text-neutral-950 dark:text-white text-2xl leading-none">$60</div>
          <div className="text-[rgba(113,113,130,1)] dark:text-white text-sm leading-5 mt-[9px]">
            per 1M output
            <br />
            tokens
          </div>
        </div>
      </div>

      <button className="bg-white dark:bg-neutral-900 border flex flex-col items-center text-sm text-neutral-950 dark:text-white text-center leading-none justify-center mt-4 px-[70px] py-3 rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:px-5 hover:bg-gray-50 transition-colors">
        <div>View Pricing Tiers</div>
      </button>
    </section>
  );
};

// Inline CapabilitiesSection
const CapabilitiesSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-neutral-900 border flex items-stretch gap-2 text-xs text-neutral-950 dark:text-white font-semibold leading-none mt-6 pl-[25px] pr-[77px] py-[27px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:px-5">
        <div className="flex flex-col">
          <h2 className="text-base dark:text-white font-normal leading-none">Capabilities</h2>
          <div className="self-stretch flex items-stretch gap-2 text-center mt-7">
            <div className="border flex flex-col overflow-hidden items-stretch justify-center px-2.5 py-[5px] rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
              <div className="dark:text-white">Deep Reasoning</div>
            </div>
            <div className="border flex flex-col overflow-hidden items-stretch justify-center px-2.5 py-[5px] rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
              <div className="dark:text-white">Problem Solving</div>
            </div>
          </div>
          <div className="flex items-stretch gap-2 whitespace-nowrap text-center mt-2">
            <div className="border flex flex-col overflow-hidden items-stretch justify-center px-[9px] py-1.5 rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
              <div className="dark:text-white">Science</div>
            </div>
            <div className="border flex flex-col overflow-hidden items-stretch justify-center px-[9px] py-1.5 rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
              <div className="dark:text-white">Code</div>
            </div>
          </div>
        </div>
        <div className="border flex flex-col overflow-hidden items-stretch whitespace-nowrap text-center justify-center my-auto px-2.5 py-1.5 rounded-lg border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid">
          <div className="dark:text-white">Math</div>
        </div>
      </section>

    </>
  );
};

// Main page component
const Index = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-900 w-full max-md:max-w-full">
        <div className="bg-white dark:bg-neutral-900 w-full max-md:max-w-full">
          <Navigation />

          <main className="bg-[rgba(246,243,255,1)] dark:bg-neutral-900 flex w-full flex-col items-stretch justify-center px-20 py-[37px] max-md:max-w-full max-md:px-5">
            <div className="flex flex-col items-stretch max-md:max-w-full">
              <ModelHeader />

              <div className="mt-8 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[68%] max-md:w-full max-md:ml-0">
                    <div className="w-full max-md:max-w-full max-md:mt-8">
                      <PerformanceOverview />
                      <BenchmarkTable />
                    </div>
                  </div>
                  <div className="w-[32%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="w-full max-md:mt-8">
                      <ModelInfo />
                      <PricingCard />
                      <CapabilitiesSection />
                    </div>
                  </div>
                </div>
              </div>
              {/* Capabilities Graph - full width below cards */}
              <section className="bg-white dark:bg-neutral-900 border flex flex-col text-base mt-8 px-[25px] py-[26px] rounded-[14px] border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.10)] border-solid max-md:max-w-full max-md:px-5">
                <h2 className="text-neutral-950 dark:text-white font-semibold leading-none">
                  Capabilities
                </h2>
                <p className="text-[rgba(113,113,130,1)] dark:text-white font-normal mt-[11px]">
                  Key strengths and supported features
                </p>
                <img
                  src="https://api.builder.io/api/v1/image/assets/35de5dc00516421d9aa405b4c562fade/6e7f949b5ced7938b19d13d7dabf97cd635df70f?placeholderIfAbsent=true"
                  alt="Capabilities visualization"
                  className="aspect-[4.55] object-contain w-full self-stretch mt-[26px] max-md:max-w-full"
                  style={{ maxWidth: '100%' }}
                />
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;

// (Removed duplicate BenchmarkTable definition and export)

// (Removed duplicate CapabilitiesSection definition and export)

// (Removed duplicate ModelHeader definition and export)

// (Removed duplicate ModelInfo definition and export)

// (Removed duplicate PerformanceOverview definition and export)

// (Removed duplicate PricingCard definition and export)
