/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Living Skyrim Unofficial Extras',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JaxomofRuatha', // Usually your GitHub org/user name.
  projectName: 'ls-unofficial-extras', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LS Unofficial Extras',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'changelog', 
          label: 'Changelog',
          position: 'left',
        },
        {
          to: 'docs/mods/',
          activeBasePath: 'docs',
          label: 'Extra Mods',
          position: 'left',
        },
        {
          to: 'docs/guides/',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/custom/',
          activeBasePath: 'docs',
          label: 'Custom Documents and Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              activeBasePath: 'docs',
              to: 'mods/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          routeBasePath: 'changelog',
          path: './changelog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
