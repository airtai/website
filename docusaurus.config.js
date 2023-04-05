// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'airt',
  tagline: 'AI MADE EASY',
  favicon: 'img/AIRT_icon_blue.svg',

  // Set the production url of your site here
  url: 'https://airt.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'airt', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/AIRT_logo_white.jpeg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/AIRT_icon_blue.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Tools',
            position: 'right',
            items: [
              {
                label: 'FastKafka',
                href: 'https://fastkafka.airt.ai',
              },
              {
                label: 'Material for nbdev',
                href: 'https://nbdev-mkdocs.airt.ai',
              },
              {
                label: 'Docstring-gen',
                href: 'https://docstring-gen.airt.ai',
              },
            ]
          },
          {to: '/blog', label: 'News', position: 'right'},
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'About Us',
                to: 'about-us',
              },
              {
                label: 'Contact',
                to: 'contact',
              },
            ]
          },
          // {
          //   href: 'https://www.linkedin.com/company/airt-ai',
          //   position: 'right',
          //   className: "header-discord-link",
          //   "aria-label": "Discord Link",
          // },
          {
            href: 'https://github.com/airtai',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://twitter.com/airt_AI',
            position: 'right',
            className: "header-twitter-link",
            "aria-label": "Twitter Home Page",
          },
          {
            href: 'https://www.facebook.com/airt.ai.api',
            position: 'right',
            className: "header-facebook-link",
            "aria-label": "Facebook Home Page",
          },
          {
            href: 'https://www.linkedin.com/company/airt-ai',
            position: 'right',
            className: "header-linkedin-link",
            "aria-label": "LinkedIn Home Page",
          },
        ],
      },
      footer: {
        style: 'dark',
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
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/airtai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/airt_AI',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/airt.ai.api/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/airt-ai/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                to: 'about-us',
              },
              {
                label: 'Contact',
                to: 'contact',
              },
              {
                label: 'Company information',
                to: 'company-information',
              },
            ],
          },
        ],
        copyright: `© 2023 airt`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
