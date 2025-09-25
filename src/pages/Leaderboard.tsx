import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ExternalLink, Zap, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const modelData = [
  {
    rank: 1,
    model: "o1-preview",
    type: "reasoning",
    organization: "OpenAI",
    score: 92.5,
    cost: "$15/1M",
    license: "API",
    released: "12/9/2024",
  },
  {
    rank: 2,
    model: "GPT-4o",
    type: "multimodal",
    organization: "OpenAI",
    score: 91.7,
    cost: "$2.5/1M",
    license: "API",
    released: "13/5/2024",
  },
  {
    rank: 3,
    model: "Claude 3.5 Sonnet",
    type: "multimodal",
    organization: "Anthropic",
    score: 91.5,
    cost: "$3/1M",
    license: "API",
    released: "20/6/2024",
  },
  {
    rank: 4,
    model: "Llama 3.1 405B",
    type: "text",
    organization: "Meta",
    score: 91.0,
    cost: "Free",
    license: "Open Source",
    released: "23/7/2024",
  },
  {
    rank: 5,
    model: "Midjourney v6",
    type: "image",
    organization: "Midjourney",
    score: 90.1,
    cost: "$10/1M",
    license: "Commercial",
    released: "21/12/2023",
  },
  {
    rank: 6,
    model: "Whisper Large v3",
    type: "audio",
    organization: "OpenAI",
    score: 89.5,
    cost: "Free",
    license: "Open Source",
    released: "6/11/2023",
  },
  {
    rank: 7,
    model: "DALL-E 3",
    type: "image",
    organization: "OpenAI",
    score: 88.0,
    cost: "$40/1M",
    license: "API",
    released: "2/10/2023",
  },
  {
    rank: 8,
    model: "Gemini 1.5 Pro",
    type: "multimodal",
    organization: "Google",
    score: 87.7,
    cost: "$1.25/1M",
    license: "API",
    released: "15/2/2024",
  },
  {
    rank: 9,
    model: "Stable Diffusion XL",
    type: "image",
    organization: "Stability AI",
    score: 85.0,
    cost: "Free",
    license: "Open Source",
    released: "26/7/2023",
  },
];

const categories = [
  "All",
  "Text",
  "Image",
  "Audio",
  "Video",
  "Reasoning",
  "Multi-Modal",
];

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-900">{score}</span>
      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 rounded-full"
          style={{ width: `${(score / 100) * 100}%` }}
        />
      </div>
    </div>
  );
}

function LicenseBadge({ license }: { license: string }) {
  if (license === "API") {
    return (
      <Badge
        className="border-0 rounded-lg px-2 py-1 text-xs font-semibold"
        style={{ backgroundColor: "#F1EBFF", color: "#4B00A8" }}
      >
        API
      </Badge>
    );
  }
  if (license === "Open Source") {
    return (
      <Badge
        className="border-0 rounded-lg px-2 py-1 text-xs font-semibold"
        style={{ backgroundColor: "#D1FADF", color: "#027A48" }}
      >
        Open Source
      </Badge>
    );
  }
  if (license === "Commercial") {
    return (
      <Badge
        className="border-0 rounded-lg px-2 py-1 text-xs font-semibold"
        style={{ backgroundColor: "#D1E9FF", color: "#175CD3" }}
      >
        Commercial
      </Badge>
    );
  }
  return <Badge variant="outline">{license}</Badge>;
}

function RankBadge({ rank }: { rank: number }) {
  if (rank <= 3) {
    return (
      <div className="w-7 h-5 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-800 rounded-lg flex items-center justify-center">
        <span className="text-xs font-semibold text-white">#{rank}</span>
      </div>
    );
  }
  return (
    <div className="w-7 h-5 bg-brand-50 rounded-lg flex items-center justify-center">
      <span className="text-xs font-semibold text-brand-900">#{rank}</span>
    </div>
  );
}

import React, { useState } from "react";

export default function Leaderboard() {
  const navigate = useNavigate();
  // State for compare bucket (max 3)
  type ModelType = (typeof modelData)[number];
  const [compareBucket, setCompareBucket] = useState<ModelType[]>([]);

  // Add/remove model to/from compare bucket
  const handleCompareClick = (model: ModelType) => {
    const isSelected = compareBucket.some((m) => m.rank === model.rank);
    if (isSelected) {
      setCompareBucket(compareBucket.filter((m) => m.rank !== model.rank));
    } else if (compareBucket.length < 3) {
      setCompareBucket([...compareBucket, model]);
    }
  };

  // Remove single model from compare bucket
  const handleRemoveModel = (rank: number) => {
    setCompareBucket(compareBucket.filter((m) => m.rank !== rank));
  };

  // Clear all
  const handleClearAll = () => setCompareBucket([]);

  return (
    <div className="min-h-screen bg-[#F1EBFF] dark:bg-black dark:text-white">
      <Navigation />

      <main className="px-20 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">
              AI Model Leaderboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive rankings of AI models across different modalities
              and benchmarks
            </p>
          </div>

          {/* Filters Card */}
          <div className="w-full max-w-6xl mx-auto border relative bg-white dark:bg-neutral-900 p-[25px] rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-neutral-800 mb-8">
            <div className="mb-6">
              <h3 className="text-base font-semibold text-neutral-950 dark:text-white mb-1">
                Filters
              </h3>
              <p className="text-base font-normal leading-6 text-[#717182] dark:text-gray-400">
                Refine the leaderboard based on your preferences
              </p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search models or organizations..."
                className="pl-10 h-12 bg-[#F6F4FA] dark:bg-[#23232b] border-0 rounded-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 h-8 text-xs font-semibold rounded-lg border border-[rgba(0,0,0,0.10)] dark:border-neutral-800 transition-all duration-200 ${
                    index === 0
                      ? "bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] text-white"
                      : "bg-[#F1EBFF] dark:bg-[#23232b] text-[#030213] dark:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Dropdowns */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-neutral-950 dark:text-white mb-2">
                  License
                </label>
                <Select>
                  <SelectTrigger className="bg-[#F6F4FA] dark:bg-[#23232b] border-0 rounded-lg h-9">
                    <SelectValue placeholder="All Licenses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Licenses</SelectItem>
                    <SelectItem value="api">API</SelectItem>
                    <SelectItem value="open">Open Source</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="block text-sm text-neutral-950 dark:text-white mb-2">
                  Release Year
                </label>
                <Select>
                  <SelectTrigger className="bg-[#F6F4FA] dark:bg-[#23232b] border-0 rounded-lg h-9">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="w-full max-w-6xl mx-auto border relative bg-white dark:bg-neutral-900 p-[25px] rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-neutral-800 overflow-hidden">
            <div className="pb-0">
              <h3 className="text-base font-semibold text-neutral-950 dark:text-white mb-1">
                Results (9 models)
              </h3>
              <p className="text-base font-normal leading-6 text-[#717182] dark:text-gray-400 mb-6">
                Click column headers to sort
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b-[0.667px] border-b-[rgba(0,0,0,0.10)] border-solid">
                  <tr>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-10 pl-2 text-left">
                      Rank
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-[200px] pl-[89px] text-left">
                      Model
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-[150px] pl-7 text-left">
                      Organization
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-20 pl-5 text-left">
                      Score
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-[120px] pl-5 text-left">
                      Cost
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white w-[120px] pl-5 text-left">
                      License
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white text-left pl-16">
                      Released
                    </th>
                    <th className="text-sm font-semibold leading-5 text-neutral-950 dark:text-white flex-1 flex justify-end text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const firstSelectedIndex = modelData.findIndex((model) =>
                      compareBucket.some((m) => m.rank === model.rank)
                    );
                    return modelData.map((model, index) => (
                      <React.Fragment key={model.rank}>
                        {/* Insert compare bucket row only once, before the first selected model */}
                        {compareBucket.length > 0 &&
                          index === firstSelectedIndex && (
                            <tr>
                              <td colSpan={8}>
                                <div className="flex items-center justify-between my-2 bg-[#F1EBFF] dark:bg-[#23232b] border border-[rgba(0,0,0,0.10)] dark:border-neutral-800 rounded-[10px] px-6 py-3">
                                  <div className="flex gap-2 flex-wrap items-center">
                                    <span className="text-sm font-semibold text-neutral-950 dark:text-white mr-2">
                                      Compare Models ({compareBucket.length}/3)
                                    </span>
                                    {compareBucket.map((selectedModel) => (
                                      <div
                                        key={selectedModel.rank}
                                        className="flex items-center bg-white dark:bg-neutral-800 rounded-lg px-3 py-1 mr-1 border border-[#B18BEF] dark:border-[#7c3aed]"
                                      >
                                        <span className="text-xs font-medium text-[#4B00A8] mr-2">
                                          {selectedModel.model}
                                        </span>
                                        <button
                                          className="ml-1 text-xs text-[#717182] hover:text-red-500"
                                          onClick={() =>
                                            handleRemoveModel(
                                              selectedModel.rank
                                            )
                                          }
                                          title="Remove"
                                        >
                                          ×
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="flex gap-2 items-center">
                                    <button
                                      className="text-xs font-semibold text-[#4B00A8] px-3 py-1 rounded hover:bg-white dark:hover:bg-neutral-900 border border-transparent hover:border-[#B18BEF] dark:hover:border-[#7c3aed] transition"
                                      onClick={handleClearAll}
                                    >
                                      Clear All
                                    </button>
                                    <button
                                      className={`min-w-[90px] px-5 h-9 flex items-center justify-center cursor-pointer transition-all duration-200 bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] rounded-lg hover:opacity-90 text-sm font-semibold leading-5 text-center text-white${
                                        compareBucket.length > 1 ? " pr-6" : ""
                                      }`}
                                      style={{
                                        minWidth:
                                          compareBucket.length > 0 ? 110 : 90,
                                      }}
                                      disabled={compareBucket.length === 0}
                                      // Use React Router navigation for SPA routing
                                      // Use React Router navigation for SPA routing
                                      onClick={() => {
                                        if (compareBucket.length > 0) {
                                          navigate("/comparison/modelComparison");
                                        }
                                      }}
                                    >
                                      Compare
                                      {compareBucket.length > 0
                                        ? ` (${compareBucket.length})`
                                        : ""}
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        <tr className="border-b-[0.667px] border-b-[rgba(0,0,0,0.10)] dark:border-b-neutral-800 border-solid">
                          <td className="w-[29px] h-[21px] pl-2 py-3">
                            <div
                              className={`flex items-center justify-center rounded-lg ${
                                model.rank === 1
                                  ? "bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)]"
                                  : "bg-[#F1EBFF] dark:bg-[#23232b]"
                              }`}
                            >
                              <span
                                className={`text-xs font-semibold leading-4 text-center ${
                                  model.rank === 1
                                    ? "text-white"
                                    : "text-[#030213] dark:text-white"
                                }`}
                              >
                                #{model.rank}
                              </span>
                            </div>
                          </td>
                          <td className="w-[200px] pl-[58px] py-3">
                            <div className="text-sm font-normal leading-5 text-neutral-950 dark:text-white capitalize">
                              {model.model}
                            </div>
                            <div className="text-sm font-normal leading-5 text-[#717182] dark:text-gray-400 capitalize">
                              {model.type}
                            </div>
                          </td>
                          <td className="w-[150px] text-sm font-normal leading-5 text-neutral-950 dark:text-white pl-7 py-3">
                            {model.organization}
                          </td>
                          <td className="w-20 text-sm font-normal leading-5 text-neutral-950 dark:text-white pl-5 py-3">
                            {model.score}
                          </td>
                          <td className="w-[120px] pl-5 py-3">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {model.cost}
                            </div>
                            {model.cost !== "Free" && (
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                tokens
                              </div>
                            )}
                          </td>
                          <td className="w-auto min-w-9 h-[21px] border flex items-center justify-center ml-5 px-[8.66px] py-[2.67px] rounded-lg border-solid border-[rgba(0,0,0,0.10)] dark:border-neutral-800 py-3">
                            <span className="text-xs font-semibold leading-4 text-neutral-950 dark:text-white text-center">
                              {model.license}
                            </span>
                          </td>
                          <td className="text-sm font-normal leading-5 text-neutral-950 dark:text-white py-3 pl-16">
                            {model.released}
                          </td>
                          <td className="flex gap-2 justify-end py-3">
                            <button className="w-14 h-8 border flex items-center justify-center cursor-pointer transition-all duration-200 bg-white dark:bg-neutral-800 rounded-lg border-solid border-[rgba(0,0,0,0.10)] dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700">
                              <span className="text-sm font-semibold leading-5 text-center text-neutral-950 dark:text-white">
                                View
                              </span>
                            </button>
                            <button
                              className={`w-[82px] h-8 flex items-center justify-center cursor-pointer transition-all duration-200 rounded-lg ${
                                compareBucket.some((m) => m.rank === model.rank)
                                  ? "bg-[#717182] opacity-80"
                                  : "bg-[linear-gradient(90deg,_#B18BEF_0%,_#4B00A8_100%)] hover:opacity-90"
                              }`}
                              disabled={
                                !compareBucket.some(
                                  (m) => m.rank === model.rank
                                ) && compareBucket.length >= 3
                              }
                              onClick={() => handleCompareClick(model)}
                            >
                              <span className="text-sm font-semibold leading-5 text-center text-white">
                                {compareBucket.some(
                                  (m) => m.rank === model.rank
                                )
                                  ? "Remove"
                                  : "Compare"}
                              </span>
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
