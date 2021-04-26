/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Living Skyrim Unofficial Extras',
  tagline: `This is a completely unofficial listing of mods and customizations that I and others from the Living Skyrim community have attempted to make work with the base Living Skyrim modlist. Adding ANY of these completely voids all support from ForgottenGlory and the Living Skyrim development team. Any custom patches are EXPERIMENTAL and load/install suggestions are ONLY SUGGESTIONS, using any of them is completely at your own risk.
  If you have issues or notice unresolved conflicts/bugs, please report them in an issue! Things may go out of date somewhat quickly, and either way I don't claim perfection with custom patches. Thank you!`,
  url: 'https://jaxomofruatha.github.io',
  baseUrl: '/ls-unofficial-extras/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JaxomofRuatha', // Usually your GitHub org/user name.
  projectName: 'ls-unofficial-extras', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'LS Unofficial Extras',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ls3logo.png',
      },
      items: [
        {
          to: 'changelog', 
          label: 'Changelog',
          position: 'left',
        },
        {
          to: 'docs/mods',
          label: 'Extra Mods',
          position: 'left',
        },
        {
          to: 'docs/guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/custom',
          label: 'Custom Changes and Documents',
          position: 'left',
        },
        {
          href: 'https://www.fgsmodlists.com/living-skyrim',
          label: 'Living Skyrim Readme',
          position: 'right',
        },
        {
          href: 'https://www.wabbajack.org',
          label: 'Wabbajack',
          position: 'right',
        },
        {
          href: 'https://github.com/JaxomofRuatha/ls-unofficial-extras',
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
              label: 'Extra Mods',
              to: 'docs/mods',
            },
            {
              label: 'Guides',
              to: 'docs/guides',
            },
            {
              label: 'Custom Documents and Examples',
              to: 'docs/custom',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: `ForgottenGlory's Modlists Discord`,
              href: 'https://discord.gg/G5EKzz8CSN',
            },
            {
              label: 'Wabbajack Discord',
              href: 'https://discord.gg/wabbajack',
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
              href: 'https://github.com/JaxomofRuatha/ls-unofficial-extras',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} by JaxomofRuatha. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/JaxomofRuatha/ls-unofficial-extras/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/JaxomofRuatha/ls-unofficial-extras/',
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
