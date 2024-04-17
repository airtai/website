// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "airt",
  tagline: "AI in motion",
  customFields: {
    description: "Build your own SaaS with our multi-agent AI framework.",
  },
  favicon: "img/AIRT_icon_blue.svg",

  // Set the production url of your site here
  url: "http://www.airt.ai/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "airt", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-KM9N6TFVWE",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/airt-social-card.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
      },
      navbar: {
        title: "airt",
        logo: {
          alt: "airt logo",
          src: "img/AIRT_icon_blue.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Products",
            position: "right",
            items: [
              {
                label: "FastAgency",
                href: "https://fastagency.ai",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tools",
            position: "right",
            items: [
              {
                label: "FastStream",
                href: "https://faststream.airt.ai",
              },
              {
                label: "Monotonic Neural Networks",
                href: "https://monotonic.airt.ai",
              },
            ],
          },
          {
            to: "news",
            label: "News",
            position: "right",
            className: "styled-item",
          },
          {
            to: "about-us",
            label: "About Us",
            position: "right",
            className: "styled-item",
          },
          {
            href: "https://discord.gg/CJWmYpyFbc",
            position: "right",
            className: "social-link extra-margin header-discord-link",
            "aria-label": "Discord Link",
          },
          {
            href: "https://github.com/airtai",
            position: "right",
            className: "social-link header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://twitter.com/airt_AI",
            position: "right",
            className: "social-link header-twitter-link",
            "aria-label": "Twitter Home Page",
          },
          {
            href: "https://www.facebook.com/airt.ai.api",
            position: "right",
            className: "social-link header-facebook-link",
            "aria-label": "Facebook Home Page",
          },
          {
            href: "https://www.linkedin.com/company/airt-ai",
            position: "right",
            className: "social-link header-linkedin-link",
            "aria-label": "LinkedIn Home Page",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: "COMMUNITY",
            items: [
              {
                html: `
                    <a class="footer-discord-link" href="https://discord.gg/CJWmYpyFbc" target="_blank" rel="noreferrer noopener" aria-label="Discord link"></a>
                  `,
              },
              {
                html: `
                    <a class="footer-github-link" href="https://github.com/airtai" target="_blank" rel="noreferrer noopener" aria-label="Github link"></a>
                  `,
              },
              {
                html: `
                    <a class="footer-twitter-link" href="https://twitter.com/airt_AI" target="_blank" rel="noreferrer noopener" aria-label="Twitter link"></a>
                  `,
              },
              {
                html: `
                    <a class="footer-facebook-link" href="https://www.facebook.com/airt.ai.api/" target="_blank" rel="noreferrer noopener" aria-label="Facebook link"></a>
                  `,
              },
              {
                html: `
                    <a class="footer-linkedin-link" href="https://www.linkedin.com/company/airt-ai/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn link"></a>
                  `,
              },
            ],
          },
          {
            title: "EXPLORE PRODUCTS",
            items: [
              {
                label: "FastAgency",
                href: "https://fastagency.ai",
              },
            ],
          },
          {
            title: "EXPLORE TOOLS",
            items: [
              {
                label: "FastStream",
                href: "https://faststream.airt.ai",
              },
              {
                label: "Monotonic Neural Networks",
                href: "https://monotonic.airt.ai",
              },
            ],
          },
          {
            title: "EXPLORE MORE",
            items: [
              {
                label: "News",
                to: "news",
              },
              {
                label: "About Us",
                to: "about-us",
              },
              {
                label: "Company information",
                to: "company-information",
              },
              {
                label: "Contact Us",
                to: "contact-us",
              },
            ],
          },
        ],
        copyright: `© 2023 airt. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
