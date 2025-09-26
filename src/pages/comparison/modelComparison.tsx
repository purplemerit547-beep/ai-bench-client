import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

type TabType = "performance" | "pricing" | "features";

// ModelCard component
interface ModelCardProps {
  name: string;
  company: string;
  score: string;
  type: string;
  released: string;
  cost: string;
  isStarred?: boolean;
  isAPI?: boolean;
  isOpenSource?: boolean;
  isFree?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  name,
  company,
  score,
  type,
  released,
  cost,
  isStarred = false,
  isAPI = false,
  isOpenSource = false,
  isFree = false,
}) => {
  const navigate = useNavigate();
  return (
    <article className="box-border w-full max-w-md border bg-white dark:bg-neutral-900 p-6 rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] flex flex-col justify-between max-md:w-full max-sm:p-4">
      <header className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-neutral-950 dark:text-white text-xl font-semibold leading-7 mb-1 flex items-center gap-2">
            {name}
            {isStarred && (
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="star-icon" style="box-sizing: border-box; width: 16px; height: 16px"> <path d="M8.66321 1.85999C8.69243 1.80096 8.73756 1.75128 8.79351 1.71654C8.84947 1.6818 8.91402 1.66339 8.97988 1.66339C9.04574 1.66339 9.11029 1.6818 9.16624 1.71654C9.2222 1.75128 9.26733 1.80096 9.29655 1.85999L10.8365 4.97932C10.938 5.18463 11.0878 5.36226 11.273 5.49696C11.4582 5.63165 11.6733 5.7194 11.8999 5.75265L15.3439 6.25665C15.4091 6.26611 15.4704 6.29363 15.5209 6.33612C15.5713 6.3786 15.6088 6.43435 15.6292 6.49706C15.6496 6.55976 15.6521 6.62692 15.6363 6.69094C15.6205 6.75496 15.5871 6.81329 15.5399 6.85932L13.0492 9.28465C12.885 9.44472 12.7621 9.64231 12.6911 9.86041C12.6201 10.0785 12.6033 10.3106 12.6419 10.5367L13.2299 13.9633C13.2414 14.0285 13.2344 14.0957 13.2095 14.1571C13.1847 14.2185 13.1432 14.2717 13.0896 14.3107C13.036 14.3496 12.9725 14.3727 12.9065 14.3773C12.8404 14.3818 12.7743 14.3678 12.7159 14.3367L9.63721 12.718C9.43436 12.6115 9.20866 12.5558 8.97955 12.5558C8.75043 12.5558 8.52473 12.6115 8.32188 12.718L5.24388 14.3367C5.18543 14.3676 5.11948 14.3815 5.05351 14.3768C4.98755 14.3721 4.92422 14.349 4.87074 14.3101C4.81726 14.2712 4.77577 14.2181 4.75098 14.1568C4.7262 14.0955 4.71912 14.0285 4.73054 13.9633L5.31788 10.5373C5.35668 10.3111 5.33987 10.0789 5.2689 9.86069C5.19794 9.64245 5.07495 9.44476 4.91054 9.28465L2.41988 6.85999C2.37227 6.81401 2.33854 6.75558 2.32252 6.69137C2.3065 6.62716 2.30884 6.55973 2.32926 6.49678C2.34969 6.43383 2.38739 6.37788 2.43806 6.33531C2.48874 6.29274 2.55035 6.26525 2.61588 6.25599L6.05921 5.75265C6.28605 5.71965 6.50147 5.63203 6.68693 5.49731C6.8724 5.3626 7.02235 5.18483 7.12388 4.97932L8.66321 1.85999Z" fill="#EFB100" stroke="#EFB100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                }}
              />
            )}
          </h3>
          <p className="text-[#717182] dark:text-neutral-400 text-base font-normal leading-6">
            {company}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          {isAPI && (
            <div className="flex w-full flex-col justify-center items-center text-[#030213] dark:text-purple-200 text-center text-sm font-semibold leading-5 h-[21px] gap-1 bg-purple-100 dark:bg-purple-900 px-2 py-[2.67px] rounded-lg">
              <div className="flex items-center gap-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="api-icon" style="box-sizing: border-box; width: 16px; height: 16px"> <path d="M8.42969 1.33331V14.6666" stroke="#6E11B0" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.763 3.33331H6.76302C6.14418 3.33331 5.55069 3.57915 5.11311 4.01673C4.67552 4.45432 4.42969 5.04781 4.42969 5.66665C4.42969 6.28548 4.67552 6.87898 5.11311 7.31656C5.55069 7.75415 6.14418 7.99998 6.76302 7.99998H10.0964C10.7152 7.99998 11.3087 8.24581 11.7463 8.6834C12.1839 9.12098 12.4297 9.71447 12.4297 10.3333C12.4297 10.9522 12.1839 11.5456 11.7463 11.9832C11.3087 12.4208 10.7152 12.6666 10.0964 12.6666H4.42969" stroke="#6E11B0" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                  }}
                />
                <span className="text-[#6E11B0] dark:text-purple-300 text-center text-xs font-semibold leading-4">
                  API
                </span>
              </div>
            </div>
          )}
          {isOpenSource && (
            <div className="flex w-[107px] flex-col justify-center items-center text-[#030213] dark:text-green-200 text-center text-sm font-semibold leading-5 h-[21px] gap-1 bg-green-100 dark:bg-green-900 px-2 py-[2.67px] rounded-lg">
              <div className="flex items-center gap-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="open-source-icon" style="box-sizing: border-box; width: 16px; height: 16px"> <path d="M4.63965 1.99998V9.99998" stroke="#016630" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.6396 5.99998C13.7442 5.99998 14.6396 5.10455 14.6396 3.99998C14.6396 2.89542 13.7442 1.99998 12.6396 1.99998C11.5351 1.99998 10.6396 2.89542 10.6396 3.99998C10.6396 5.10455 11.5351 5.99998 12.6396 5.99998Z" stroke="#016630" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.63965 14C5.74422 14 6.63965 13.1046 6.63965 12C6.63965 10.8954 5.74422 9.99998 4.63965 9.99998C3.53508 9.99998 2.63965 10.8954 2.63965 12C2.63965 13.1046 3.53508 14 4.63965 14Z" stroke="#016630" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.6396 5.99998C12.6396 7.59128 12.0075 9.11741 10.8823 10.2426C9.75707 11.3678 8.23095 12 6.63965 12" stroke="#016630" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
                  }}
                />
                <span className="text-[#030213] dark:text-green-200 text-center text-sm font-semibold leading-5">
                  Open Source
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mb-6">
        <h4 className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5 mb-2">
          Overall Score
        </h4>
        <div className="text-neutral-950 dark:text-white text-2xl font-bold leading-8 mb-2">
          {score}
        </div>
        <div className="w-full h-2 bg-[#ECECF0] dark:bg-neutral-800 rounded-full">
          <div
            className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
            style={{ width: `${parseFloat(score)}%` }}
          />
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
            Type
          </span>
          <span className="text-neutral-950 dark:text-white text-sm font-normal leading-5 capitalize">
            {type}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
            Released
          </span>
          <span className="text-neutral-950 dark:text-white text-sm font-normal leading-5">
            {released}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
            Cost
          </span>
          {isFree ? (
            <div className="flex w-10 h-[21px] justify-center items-center border px-2 py-[2.67px] rounded-lg border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] bg-white dark:bg-neutral-900">
              <span className="text-[#00A63E] dark:text-green-300 text-center text-xs font-semibold leading-4">
                Free
              </span>
            </div>
          ) : (
            <span className="text-neutral-950 dark:text-white text-sm font-normal leading-5">
              {cost}
            </span>
          )}
        </div>
      </div>

      <button
        className="flex w-full justify-center items-center gap-2.5 cursor-pointer border bg-white dark:bg-neutral-900 py-2 px-4 rounded-lg border-solid border-[#6931C9] dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/40 transition-colors"
        onClick={() => navigate("/viewPage/modelView")}
        type="button"
      >
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="view-details-icon" style="box-sizing: border-box; width: 16px; height: 16px"> <path d="M10.7998 2.32999H14.7998V6.32999" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.46631 9.66332L14.7996 2.32999" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.7998 8.99665V12.9967C12.7998 13.3503 12.6593 13.6894 12.4093 13.9395C12.1592 14.1895 11.8201 14.33 11.4665 14.33H4.13314C3.77952 14.33 3.44038 14.1895 3.19033 13.9395C2.94028 13.6894 2.7998 13.3503 2.7998 12.9967V5.66332C2.7998 5.3097 2.94028 4.97056 3.19033 4.72051C3.44038 4.47046 3.77952 4.32999 4.13314 4.32999H8.13314" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
        <span className="text-neutral-950 dark:text-white text-sm font-medium">
          View Details
        </span>
      </button>
    </article>
  );
};

// OverallScores component
const OverallScores: React.FC = () => {
  return (
    <section className="box-border w-full border bg-white dark:bg-neutral-900 p-6 rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] max-md:w-full max-sm:p-4 overflow-x-auto">
      <header className="mb-6">
        <h3 className="text-neutral-950 dark:text-white text-xl font-semibold leading-7 mb-2">
          Overall Scores
        </h3>
        <p className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
          Composite performance rankings
        </p>
      </header>

      <div className="mb-6 w-full overflow-x-auto">
        <div
          className="min-w-[350px] w-full dark:bg-neutral-900 rounded-lg"
          style={{ maxWidth: "100%", overflowX: "auto" }}
          dangerouslySetInnerHTML={{
            __html: `<svg width="100%" height="320" viewBox="0 0 544 321" fill="none" xmlns="http://www.w3.org/2000/svg" class="bar-chart" style="box-sizing: border-box; max-width: 100%; height: 320px; margin-bottom: 24px; display: block; background: transparent;">
                <g class="grid-lines">
                  <path d="M65.6699 285.67H538.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M65.6699 215.67H538.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M65.6699 145.67H538.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M65.6699 75.67H538.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M65.6699 5.66998H538.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M144.503 5.66998V285.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M302.17 5.66998V285.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M459.836 5.66998V285.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M65.6699 5.66998V285.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                  <path d="M538.67 5.66998V285.67" stroke="#CCCCCC" stroke-dasharray="3 3" class="light-grid"/>
                </g>
                <g class="axes">
                  <path d="M65.6699 285.67H538.67" stroke="#666666"/>
                  <path d="M144.503 291.67V285.67" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="115.355" y="301.508">GPT-4o</tspan></text>
                  <path d="M302.17 291.67V285.67" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="232.506" y="301.508">Claude 3.5 Sonnet</tspan></text>
                  <path d="M459.837 291.67V285.67" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="402.626" y="301.508">Llama 3.1 405B</tspan></text>
                  <path d="M65.6699 5.66998V285.67" stroke="#666666"/>
                  <path d="M59.6699 285.67H65.6699" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="47.6699" y="289.248">0</tspan></text>
                  <path d="M59.6699 215.67H65.6699" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="38.248" y="219.248">25</tspan></text>
                  <path d="M59.6699 145.67H65.6699" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="37.9355" y="149.248">50</tspan></text>
                  <path d="M59.6699 75.67H65.6699" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="38.9512" y="79.2482">75</tspan></text>
                  <path d="M59.6699 5.66998H65.6699" stroke="#666666"/>
                  <text fill="#666666" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="16" letter-spacing="0em"><tspan x="30.2324" y="16.2482">100</tspan></text>
                </g>
                <g class="bars">
                  <path d="M81.4365 28.91H207.437V285.67H81.4365V28.91Z" fill="#FFBE0C"/>
                  <path d="M239.103 76H365.103V285.67H239.103V76Z" fill="#49FF71"/>
                  <path d="M396.77 146H522.77V285.67H396.77V146Z" fill="#FF4C4C"/>
                </g>
                <style>
                  @media (prefers-color-scheme: dark) {
                    .bar-chart .light-grid { stroke: #333333 !important; }
                    .bar-chart .axes path, .bar-chart .axes text { stroke: #BBBBBB !important; fill: #BBBBBB !important; }
                    .bar-chart .bars path { opacity: 0.85; }
                  }
                </style>
              </svg>`,
          }}
        />
      </div>
    </section>
  );
};

// PerformanceRadar component
const PerformanceRadar: React.FC = () => {
  return (
    <section className="box-border w-full max-w-xl border bg-white dark:bg-neutral-900 p-6 rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] max-md:w-full max-sm:p-4 overflow-x-auto">
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

// DetailedComparison component
type PerformanceRow = {
  benchmark: string;
  gpt4o: string;
  claude: string;
  llama: string;
};
type FeatureOrPricingRow = {
  feature: string;
  gpt4o: string;
  claude: string;
  llama: string;
};

const DetailedComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("performance");

  const performanceData: PerformanceRow[] = [
    {
      benchmark: "Overall Score",
      gpt4o: "91.7%",
      claude: "91.5%",
      llama: "91.0%",
    },
    { benchmark: "MMLU", gpt4o: "88.7%", claude: "88.3%", llama: "87.3%" },
    { benchmark: "HumanEval", gpt4o: "90.2%", claude: "92.0%", llama: "89.0%" },
    { benchmark: "GSM8K", gpt4o: "95.8%", claude: "96.4%", llama: "96.8%" },
    { benchmark: "CLIP Score", gpt4o: "92.1%", claude: "89.2%", llama: "N/A" },
  ];

  const pricingData: FeatureOrPricingRow[] = [
    {
      feature: "Input Cost",
      gpt4o: "$2.5/1M tokens",
      claude: "$3/1M tokens",
      llama: "Free",
    },
    {
      feature: "Output Cost",
      gpt4o: "$10/1M tokens",
      claude: "$15/1M tokens",
      llama: "Free",
    },
    {
      feature: "Context Window",
      gpt4o: "128K tokens",
      claude: "200K tokens",
      llama: "128K tokens",
    },
    {
      feature: "Rate Limits",
      gpt4o: "10K RPM",
      claude: "5K RPM",
      llama: "Unlimited",
    },
  ];

  const featuresData: FeatureOrPricingRow[] = [
    { feature: "Multimodal", gpt4o: "✓", claude: "✓", llama: "✗" },
    { feature: "Function Calling", gpt4o: "✓", claude: "✓", llama: "✓" },
    { feature: "JSON Mode", gpt4o: "✓", claude: "✗", llama: "✓" },
    { feature: "Streaming", gpt4o: "✓", claude: "✓", llama: "✓" },
    { feature: "Fine-tuning", gpt4o: "✓", claude: "✗", llama: "✓" },
  ];

  const getCurrentData = (): (PerformanceRow | FeatureOrPricingRow)[] => {
    switch (activeTab) {
      case "performance":
        return performanceData;
      case "pricing":
        return pricingData;
      case "features":
        return featuresData;
      default:
        return performanceData;
    }
  };

  const getColumnHeader = () => {
    switch (activeTab) {
      case "performance":
        return "Benchmark";
      case "pricing":
        return "Feature";
      case "features":
        return "Feature";
      default:
        return "Benchmark";
    }
  };

  return (
    <section className="box-border w-full border bg-white dark:bg-neutral-900 p-6 rounded-[14px] border-solid border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)] max-md:w-full max-sm:p-4 overflow-x-auto">
      <header className="mb-6">
        <h3 className="text-neutral-950 dark:text-white text-xl font-semibold leading-7 mb-2">
          Detailed Comparison
        </h3>
        <p className="text-[#717182] dark:text-neutral-400 text-sm font-normal leading-5">
          Side-by-side feature and performance comparison
        </p>
      </header>

      <div className="w-full h-9 relative bg-[#F6F3FF] dark:bg-neutral-800 mb-8 rounded-[14px] overflow-x-auto">
        <div className="flex min-w-[600px] w-full relative">
          <button
            onClick={() => setActiveTab("performance")}
            className={`flex-1 min-w-[180px] flex justify-center items-center px-0 py-[5.17px] rounded-lg transition-colors mx-1 ${
              activeTab === "performance"
                ? "bg-[#6931C9] text-white dark:bg-purple-700 dark:text-white"
                : "bg-transparent text-[#717182] dark:text-neutral-300 hover:text-[#6931C9] dark:hover:text-purple-400"
            }`}
          >
            <span className="text-center text-sm font-semibold leading-5">
              Performance
            </span>
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={`flex-1 min-w-[180px] flex justify-center items-center px-0 py-[5.17px] rounded-lg transition-colors mx-1 ${
              activeTab === "pricing"
                ? "bg-[#6931C9] text-white dark:bg-purple-700 dark:text-white"
                : "bg-transparent text-[#717182] dark:text-neutral-300 hover:text-[#6931C9] dark:hover:text-purple-400"
            }`}
          >
            <span className="text-center text-sm font-semibold leading-5">
              Pricing
            </span>
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`flex-1 min-w-[180px] flex justify-center items-center px-0 py-[5.17px] rounded-lg transition-colors mx-1 ${
              activeTab === "features"
                ? "bg-[#6931C9] text-white dark:bg-purple-700 dark:text-white"
                : "bg-transparent text-[#717182] dark:text-neutral-300 hover:text-[#6931C9] dark:hover:text-purple-400"
            }`}
          >
            <span className="text-center text-sm font-semibold leading-5">
              Features
            </span>
          </button>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)]">
              <th className="text-left text-[#717182] dark:text-neutral-400 text-sm font-semibold leading-5 py-3 w-1/4 whitespace-nowrap">
                {getColumnHeader()}
              </th>
              <th className="text-left text-[#717182] dark:text-neutral-400 text-sm font-semibold leading-5 py-3 w-1/4 whitespace-nowrap">
                GPT-4o
              </th>
              <th className="text-left text-[#717182] dark:text-neutral-400 text-sm font-semibold leading-5 py-3 w-1/4 whitespace-nowrap">
                Claude 3.5 Sonnet
              </th>
              <th className="text-left text-[#717182] dark:text-neutral-400 text-sm font-semibold leading-5 py-3 w-1/4 whitespace-nowrap">
                Llama 3.1 405B
              </th>
            </tr>
          </thead>
          <tbody>
            {getCurrentData().map((row, index) => (
              <tr
                key={index}
                className={`${
                  index < getCurrentData().length - 1
                    ? "border-b border-[rgba(0,0,0,0.10)] dark:border-[rgba(255,255,255,0.10)]"
                    : ""
                } ${index % 2 === 1 ? "bg-[#F6F3FF] dark:bg-neutral-800" : ""}`}
              >
                <td className="text-neutral-950 dark:text-white text-sm font-normal leading-5 py-3 whitespace-nowrap">
                  {"benchmark" in row ? row.benchmark : row.feature}
                </td>
                <td className="text-neutral-950 dark:text-white text-sm font-normal leading-5 py-3 whitespace-nowrap">
                  {row.gpt4o}
                </td>
                <td className="text-neutral-950 dark:text-white text-sm font-normal leading-5 py-3 whitespace-nowrap">
                  {row.claude}
                </td>
                <td className="text-neutral-950 dark:text-white text-sm font-normal leading-5 py-3 whitespace-nowrap">
                  {row.llama}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Main page component
const ModelComparisonPage = () => {
  const navigate = useNavigate();
  return (
    <div className="box-border min-h-screen bg-white dark:bg-black">
      <div className="box-border flex w-full min-h-screen flex-col justify-center items-start bg-white dark:bg-black">
        <div className="box-border flex w-full flex-col justify-start items-start bg-white dark:bg-black">
          <Navigation />
          <main className="box-border flex w-full flex-col justify-center items-center min-h-[calc(100vh_-_65px_-_309px)] bg-[#F6F3FF] dark:bg-neutral-950 px-8 py-8 max-md:px-4 max-md:py-8 max-sm:px-2 max-sm:py-4">
            <div className="box-border w-full max-w-screen-xl relative">
              {/* Back Button */}
              <button
                className="flex items-center gap-2 text-sm text-neutral-950 dark:text-white font-semibold text-center leading-none px-3 py-2 rounded-lg transition-all duration-200 w-fit group focus:outline-none mb-4
                  hover:bg-[rgba(177,139,239,0.15)] hover:shadow-[0_2px_8px_0_rgba(177,139,239,0.15)]
                  dark:hover:bg-[rgba(177,139,239,0.25)] dark:hover:shadow-[0_2px_8px_0_rgba(177,139,239,0.25)]"
                onClick={() => navigate("/leaderboard")}
                type="button"
              >
                <span
                  className="flex items-center transition-transform duration-200 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
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

              {/* Page Header */}
              <header className="mb-8">
                <h1 className="text-neutral-950 dark:text-white text-4xl font-bold leading-10 mb-2">
                  Model Comparison
                </h1>
                <p className="text-[#717182] dark:text-neutral-400 text-lg font-normal leading-7">
                  Side-by-side comparison of 3 AI models
                </p>
              </header>

              {/* Model Tags */}
              <div className="flex flex-wrap gap-2 mb-8 max-md:mb-6">
                <div className="flex w-[65px] flex-col justify-center items-center h-[25px] text-[#030213] dark:text-white text-center text-sm font-semibold leading-5 bg-[#ECEEF2] dark:bg-neutral-800 px-2 py-[3.33px] rounded-lg">
                  GPT-4o
                </div>
                <div className="flex w-[132px] flex-col justify-center items-center h-[25px] text-[#030213] dark:text-white text-center text-sm font-semibold leading-5 bg-[#ECEEF2] dark:bg-neutral-800 px-2 py-[3.33px] rounded-lg">
                  Claude 3.5 Sonnet
                </div>
                <div className="flex w-[111px] flex-col justify-center items-center h-[25px] text-[#030213] dark:text-white text-center text-sm font-semibold leading-5 bg-[#ECEEF2] dark:bg-neutral-800 px-2 py-[3.33px] rounded-lg">
                  Llama 3.1 405B
                </div>
              </div>

              {/* Model Cards Grid */}
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <ModelCard
                  name="GPT-4o"
                  company="OpenAI"
                  score="91.7"
                  type="multimodal"
                  released="13/5/2024"
                  cost="$2.5/1M"
                  isStarred={true}
                  isAPI={true}
                />
                <ModelCard
                  name="Claude 3.5 Sonnet"
                  company="Anthropic"
                  score="91.5"
                  type="multimodal"
                  released="20/6/2024"
                  cost="$3/1M"
                  isAPI={true}
                />
                <ModelCard
                  name="Llama 3.1 405B"
                  company="Meta"
                  score="91.0"
                  type="text"
                  released="23/7/2024"
                  cost="Free"
                  isOpenSource={true}
                  isFree={true}
                />
              </section>

              {/* Charts Grid */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <PerformanceRadar />
                <OverallScores />
              </section>

              {/* Detailed Comparison */}
              <section className="mb-12">
                <DetailedComparison />
              </section>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ModelComparisonPage;
//external