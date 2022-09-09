const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  clientModules: [require.resolve('./src/js/detectDevice.js'), require.resolve('./src/js/chatBot.js'), require.resolve('./src/js/creditToConsole.js')],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*announcementBar: {
        id: 'support_us',
        content:
          'Hey there!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },*/
      navbar: {
        title: '',
        logo: {
          alt: 'Odysee Logo',
          src: 'img/Logo_White_Background_Black_Text.png',
          srcDark: 'img/Logo_Transparent_White_Text.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Help Hub',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://odysee.com',
            label: 'Odysee',
            position: 'right',
          },
          {
            type: 'custom-image',
            url: '/img/g_64x64p_RGB_LadyFungus.png',
			link: '/',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help Hub',
            items: [
              {
				faicon: "fa-house",
                label: 'Index',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
				faicon: "fa-brands fa-odysee",
                label: 'Odysee',
                href: 'https://odysee.com/@Odysee:8',
              },
              {
				faicon: "fa-brands fa-discord",
                label: 'Discord',
                href: 'https://chat.odysee.com/',
              },
              {
				faicon: "fa-brands fa-reddit",
                label: 'Reddit',
                href: 'https://www.reddit.com/r/OdyseeForever/',
              },
              {
				faicon: "fa-brands fa-facebook",
                label: 'Facebook',
                href: 'https://www.facebook.com/OdyseeVideo/',
              },
              {
				faicon: "fa-brands fa-tiktok",
                label: 'TikTok',
                href: 'https://www.tiktok.com/@odyseeteam',
              }
			]
          },
          {
            title: 'More',
            items: [
              {
				faicon: "fa-brands fa-github",
                label: 'GitHub',
                href: 'https://github.com/OdyseeTeam',
              },
              {
				faicon: "fa-shield-halved",
                label: 'Privacy Policy',
                href: 'https://odysee.com/$/privacypolicy',
              },
              {
				faicon: "fa-book",
                label: 'Terms of Use',
                href: 'https://odysee.com/$/tos',
              },
              {
				faicon: "fa-briefcase",
                label: 'Careers',
                href: 'https://odysee.com/$/careers',
              },
              {
				faicon: "fa-circle-info",
                label: 'Community Guidelines',
                to: '/communityguidelines',
              },
              {
				faicon: "fa-star",
                label: 'Characters',
                to: '/characters',
              },
              {
				faicon: "fa-timeline",
                label: 'Timeline',
                to: '/timeline',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Odysee Holdings, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  title: 'Odysee Help Hub',
  tagline: '',
  url: 'https://docs.odysee.tv',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-spaceman.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: '', // Usually your GitHub org/user name.
  // projectName: '', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt'],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
		indexBlog: false,
		docsRouteBasePath: "/",
		docsDir: "docs",
        language: ['en', 'es', 'fr', 'de', 'pt'],
		searchBarShortcutHint: false,
		explicitSearchResultPath: true,
        ignoreFiles: [
		  "category-livestreaming",
		  "category-basics",
		  "category-syncprogram",
		  "category-channels",
		  "category-interaction",
		  "category-uploading",
		  "category-playlists",
		  "category-monetization",
		  "category-wallet",
		  "category-blockchain",
		  "category-moderation",
		  "category-contentdiscovery",
		  "category-categories",
		  "category-accountcreation",
		  "category-loggingin",
		  "category-walkthrough",
		  "category-faq",
		  "category-fileuploads",
		  "category-textuploads",
		  "category-creatingalivestream",
		  "category-rewards",
		  "category-earningsperview",
		  "category-lbctips",
		  "category-cashtips",
		  "category-staking",
		  "category-monetization/category-earningsperview",
        ],
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030,
        min: 640,
        steps: 4,
        disableInDev: true,
      },
    ],
  ].filter(Boolean),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/OdyseeTeam/odysee-docs/blob/main/',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'en') {
              return `https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/${docPath}`;
          },
          editLocalizedFiles: true,
          admonitions: {
            tag: ':::',
            keywords: ['note', 'tip', 'info', 'caution', 'danger'],
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
