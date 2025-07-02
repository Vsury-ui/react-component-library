import { JSX, useState } from "react";
import Tabs from ".";
import { TabsProps } from ".";

export default {
  component: Tabs,
  title: "Tabs",
  tags: ["autodocs"],
};

const tabsData = [
  {
    title: "Tab 1",
    content: "Content of Tab 1",
  },
  {
    title: "Tab 2",
    content: "Content of Tab 2",
  },
  {
    title: "Tab 3",
    content: "Content of Tab 3",
  },
];

const Template = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return <Tabs {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const Basic = {
  args: {
    tabsData,
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };

export const WithDisabledTabs = {
  args: {
    tabsData,
    disabledTabIndexes: [1],
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };

export const Vertical = {
  args: {
    tabsData,
    orientaion: "vertical",
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };