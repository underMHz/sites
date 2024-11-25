// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "サイトマップ",
  favicon: "img/favicon.ico",
  tagline: "underMHzのウェブサイト",

  // Set the production url of your site here
  url: "https://underMHz.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sites/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "underMHz", // Usually your GitHub org/user name.
  projectName: "sites", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          /* `docs` をホームに変更 */
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "記事一覧",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      metadata: [
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "アンダーメガヘルツ",
        },
        {
          name: "og:description",
          content:
            "underMHzによる技術系ブログ&これまでに作ったアレコレを公開しています！",
        },
        {
          name: "og:image",
          content: "/img/ogp.png",
        },
        {
          name: "og:url",
          content: "https://underMHz.github.io",
        },
        {
          name: "og:site_name",
          content: "アンダーメガヘルツ",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "アンダーメガヘルツ",
        },
        {
          name: "twitter:description",
          content:
            "underMHzによる技術系ブログ&これまでに作ったアレコレを公開しています！",
        },
        {
          name: "twitter:image",
          content: "/img/ogp.png",
        },
      ],
      navbar: {
        //title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          /**{
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },**/
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "X",
                href: "https://x.com/underMHz",
              },
              {
                label: "note",
                href: "https://note.com/umhz/",
              },
              {
                label: "BOOTH",
                href: "https://shibuichi.booth.pm/",
              },
              {
                label: "GitHub",
                href: "https://github.com/underMHz",
              },
              {
                label: "Thingiverse",
                href: "https://www.thingiverse.com/undermhz/designs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} underMHz`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
