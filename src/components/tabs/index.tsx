import classNames from "classnames";
import React from "react";

function Tabs({
  tabsData,
  activeTab,
  onTabChange,
  disabledTabIndexes = [],
  orientaion = "horizontal",
}: TabsProps) {
  return (
    <div
      className={classNames("flex gap-5", {
        "flex-row justify-start": orientaion === "vertical",
        "flex-col": orientaion === "horizontal",
      })}
    >
      <div
        className={classNames(
          "flex gap-5 border-0 border-solid border-gray-300",
          {
            "flex-col border-r": orientaion === "vertical",
            "flex-row border-b": orientaion === "horizontal",
          }
        )}
      >
        {tabsData.map((tab, index) => (
          <div
            className={classNames("py-2 pr-2 cursor-pointer", {
              "border-primary border-solid border-b-4 border-0":
                activeTab === index && orientaion === "horizontal",
              "border-primary border-solid border-r-4 border-0":
                activeTab === index && orientaion === "vertical",
              "opacity-50 cursor-not-allowed pointer-events-none":
                disabledTabIndexes.includes(index),
            })}
            onClick={() => onTabChange(index)}
          >
            <span
              className={classNames("text-sm text-gray-500", {
                "text-primary": activeTab === index,
              })}
            >
              {tab.title}
            </span>
          </div>
        ))}
      </div>

      <div className="text-sm">{tabsData[activeTab].content}</div>
    </div>
  );
}

export default Tabs;

export interface TabsProps {
  tabsData: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  activeTab: number;
  onTabChange: (index: number) => void;
  disabledTabIndexes?: number[];
  orientaion?: "horizontal" | "vertical";
}