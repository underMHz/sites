// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    /*
    {
      type: "category",
      label: "固定ページ",
      link: {
        type: "generated-index",
        title: "固定ページ",
        slug: "/pages",
      },
      items: ["pages/home", "pages/services"],
    },
    */
    {
      type: "doc",
      id: "index",
    },
    {
      type: "doc",
      id: "ergonumeric19_buildguide",
    },
    {
      type: "doc",
      id: "yahaamp_buildguide",
    },
    {
      type: "doc",
      id: "picoearthquakemon_buildguide",
    },
    {
      type: "doc",
      id: "profile",
    },
    {
      type: "doc",
      id: "information",
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
