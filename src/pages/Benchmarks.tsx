import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// --- ModelSelector ---
interface Model {
  id: string;
  name: string;
  selected: boolean;
}

interface ModelSelectorProps {
  className?: string;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ className = "" }) => {
  const [models, setModels] = useState<Model[]>([
    { id: "gpt-4o", name: "GPT-4o", selected: true },
    { id: "claude-3.5", name: "Claude 3.5 Sonnet", selected: true },
    { id: "llama-3.1", name: "Llama 3.1 405B", selected: true },
    { id: "gemini-1.5", name: "Gemini 1.5 Pro", selected: true },
    { id: "dall-e-3", name: "DALL-E 3", selected: false },
    { id: "midjourney-v6", name: "Midjourney v6", selected: false },
    { id: "stable-diffusion", name: "Stable Diffusion XL", selected: false },
    { id: "whisper-large", name: "Whisper Large v3", selected: false },
  ]);

  const toggleModel = (id: string) => {
    setModels((prev) =>
      prev.map((model) =>
        model.id === id ? { ...model, selected: !model.selected } : model
      )
    );
  };

  return (
    <div className={className}>
      <label className="text-neutral-950 dark:text-white text-sm font-normal leading-none block mb-3">
        Models to Compare
      </label>
      <div className="space-y-[15px]">
        {models.map((model) => (
          <div
            key={model.id}
            className="flex items-stretch gap-2 text-sm text-neutral-950 dark:text-white font-normal leading-none"
          >
            <button
              onClick={() => toggleModel(model.id)}
              className={`flex w-[13px] shrink-0 h-[13px] rounded-[3px] border transition-colors ${
                model.selected
                  ? "bg-[rgba(117,71,207,1)] border-[rgba(117,71,207,1)]"
                  : "bg-white border-[rgba(118,118,118,1)] border-solid"
              }`}
              aria-checked={model.selected}
              role="checkbox"
              aria-label={`Toggle ${model.name}`}
            />
            <span className={model.name.includes("Sonnet") ? "basis-auto" : ""}>
              {model.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- ChartControls ---
interface ChartControlsProps {
  className?: string;
}

const ChartControls: React.FC<ChartControlsProps> = ({ className = "" }) => {
  const [selectedBenchmark, setSelectedBenchmark] = useState("Overview");

  return (
    <aside
      className={`bg-white dark:bg-neutral-900 border flex w-full flex-col mx-auto pt-6 pb-[151px] px-6 rounded-[14px] border-[rgba(0,0,0,0.1)] border-solid max-md:mt-6 max-md:pb-[100px] max-md:px-4 max-sm:px-2 ${className}`}
    >
      <div className="flex items-stretch gap-2 text-base text-neutral-950 dark:text-white font-normal leading-none mb-9">
        <img
          src="https://api.builder.io/api/v1/image/assets/35de5dc00516421d9aa405b4c562fade/bfb143761be4f4e487dcc09076eb425c251c4097?placeholderIfAbsent=true"
          alt="Chart Controls Icon"
          className="aspect-[1] object-contain w-5 shrink-0"
        />
        <h3 className="basis-auto my-auto">Chart Controls</h3>
      </div>
      <div className="mb-[30px]">
        <label
          htmlFor="benchmark-select"
          className="text-neutral-950 dark:text-white text-sm font-normal leading-none block mb-3"
        >
          Benchmark
        </label>
        <div className="relative">
          <select
            id="benchmark-select"
            value={selectedBenchmark}
            onChange={(e) => setSelectedBenchmark(e.target.value)}
            className="bg-[rgba(246,243,255,1)] dark:bg-neutral-900 w-full flex items-stretch gap-5 text-sm text-neutral-950 dark:text-white font-normal whitespace-nowrap leading-none justify-between px-3 py-2.5 rounded-lg appearance-none cursor-pointer"
          >
            <option value="Overview">Overview</option>
            <option value="Language">Language</option>
            <option value="Vision">Vision</option>
            <option value="Audio">Audio</option>
          </select>
          <img
            src="https://api.builder.io/api/v1/image/assets/35de5dc00516421d9aa405b4c562fade/263f7536157f114eeba1c4dd7abd74ae2ad39c00?placeholderIfAbsent=true"
            alt="Dropdown Arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 aspect-[1] object-contain w-4 shrink-0 pointer-events-none"
          />
        </div>
      </div>
      <ModelSelector />
    </aside>
  );
};

// --- BenchmarkChart ---
interface ChartData {
  model: string;
  score: number;
  color: string;
  height: number;
}

interface BenchmarkChartProps {
  className?: string;
}

const BenchmarkChart: React.FC<BenchmarkChartProps> = ({ className = "" }) => {
  const chartData: ChartData[] = [
    { model: "GPT-4o", score: 95, color: "rgba(143,255,38,1)", height: 359 },
    {
      model: "Claude 3.5",
      score: 87,
      color: "rgba(43,255,163,1)",
      height: 292,
    },
    {
      model: "Sonnet Llama",
      score: 78,
      color: "rgba(255,154,12,1)",
      height: 256,
    },
    {
      model: "Llama 3.1 405B",
      score: 92,
      color: "rgba(255,177,239,1)",
      height: 349,
    },
  ];

  const selectedModels = [
    "GPT-4o",
    "Claude 3.5 Sonnet",
    "Llama 3.1 405B",
    "Gemini 1.5 Pro",
  ];

  return (
    <section
      className={`bg-white dark:bg-neutral-900 border flex w-full flex-col mx-auto pt-7 pb-3 px-6 rounded-[14px] border-[rgba(0,0,0,0.1)] border-solid max-md:max-w-full max-md:mt-6 max-md:px-4 max-sm:px-2 ${className}`}
    >
      <header className="mb-[31px]">
        <h2 className="text-neutral-950 dark:text-white text-base font-semibold leading-none mb-[7px]">
          Benchmark Overview
        </h2>
        <p className="text-[rgba(113,113,130,1)] text-base font-normal">
          Compare models across multiple benchmarks
        </p>
      </header>
      <div className="flex items-stretch gap-2 text-xs text-[rgba(3,2,19,1)] dark:text-neutral-100 font-semibold text-center leading-none mb-[22px]">
        {selectedModels.map((model) => (
          <div
            key={model}
            className="bg-[rgba(246,243,255,1)] dark:bg-zinc-900 flex flex-col overflow-hidden items-stretch whitespace-nowrap justify-center px-[9px] py-[7px] rounded-lg"
          >
            <span>{model}</span>
          </div>
        ))}
      </div>
      <div className="self-stretch flex flex-wrap ml-6 max-md:ml-0">
        <div className="w-0.5 shrink-0 h-[378px] border-black border-solid border-2 max-sm:hidden" />
        <div className="flex w-full flex-col items-center grow shrink-0 basis-0 mt-5 max-md:max-w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex gap-5 flex-nowrap w-max min-w-full">
              {chartData.map((data, index) => (
                <div
                  key={data.model}
                  className="min-w-[90px] max-w-[120px] w-[90px] sm:w-[111px] flex flex-col items-center"
                  style={{ marginLeft: index === 0 ? "20px" : "0" }}
                >
                  <div
                    className="flex shrink-0 w-full mx-auto rounded-lg"
                    style={{
                      backgroundColor: data.color,
                      height: `${data.height}px`,
                      marginTop:
                        index === 0
                          ? "0px"
                          : index === 1
                          ? "67px"
                          : index === 2
                          ? "103px"
                          : "10px",
                    }}
                    role="img"
                    aria-label={`${data.model}: ${data.score}% performance`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border self-stretch shrink-0 h-px border-black border-solid max-md:max-w-full" />
          <div className="flex gap-5 flex-nowrap w-max min-w-full text-base text-black dark:text-white font-normal leading-none ml-3 mt-2.5 max-md:ml-0 overflow-x-auto">
            <span className="min-w-[90px] max-w-[120px] w-[90px] sm:w-[111px] text-center">
              GPT-4o
            </span>
            <span className="min-w-[90px] max-w-[120px] w-[90px] sm:w-[111px] text-center">
              Claude 3.5
            </span>
            <span className="min-w-[90px] max-w-[120px] w-[90px] sm:w-[111px] text-center">
              Sonnet Llama
            </span>
            <span className="min-w-[90px] max-w-[120px] w-[90px] sm:w-[111px] text-center">
              Llama 3.1 405B
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Page Component ---
const BenchmarksPage = () => {
  return (
    <div className="bg-[rgba(246,243,255,1)] dark:bg-black">
      <div className="bg-white dark:bg-black w-full max-md:max-w-full">
        <div className="bg-white dark:bg-black w-full max-md:max-w-full">
          <Navigation />
          <main className="bg-[rgba(246,243,255,1)] dark:bg-black flex w-full flex-col items-stretch pt-10 pb-10 max-md:max-w-full max-md:pb-6">
            <div className="self-center flex w-full max-w-[1216px] flex-col max-md:max-w-full">
              <header className="mb-[34px]">
                <h1 className="text-neutral-950 dark:text-white text-3xl font-semibold leading-[1.2] mb-[29px]">
                  AI Model Benchmarks
                </h1>
                <p className="text-[rgba(113,113,130,1)] text-base font-normal max-md:max-w-full">
                  Explore and compare AI model performance across various
                  standardized benchmarks
                </p>
              </header>
              <section className="self-stretch max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[24%] max-lg:w-[35%] max-md:w-full max-md:ml-0">
                    <ChartControls />
                  </div>
                  <div className="w-[76%] ml-5 max-lg:w-[65%] max-md:w-full max-md:ml-0">
                    <BenchmarkChart />
                  </div>
                </div>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BenchmarksPage;
