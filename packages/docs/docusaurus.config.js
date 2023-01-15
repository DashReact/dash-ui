// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dash UI',
  tagline:
    'Components library for build moder aplications with Vanilla js and React builded with sass and typescript',
  url: 'https://github.com/DashReact/dash-ui',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'Dash UI',
  projectName: 'Dash UI docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DashReact/dash-ui',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/DashReact/dash-ui',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Dash UI',
        logo: {
          alt: 'Dash UI',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/DashReact/dash-ui',
            position: 'right',
            className: 'github-link',
          },
          {
            href: 'https://discord.gg/DE4M7UEA',
            position: 'right',
            className: 'discord-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dash UI',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/DE4M7UEA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dash UI. Built with Docusaurus.`,
      },
      prism: {
        defaultLanguage: 'typescript',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        hashed: true,
        language: ['en', 'es', 'fr', 'pt', 'zh'],
      },
      
    ],
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
