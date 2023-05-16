const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const FontPreloadPlugin = require('webpack-font-preload-plugin');

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
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
      typesenseCollectionName: 'Odysee Help',

      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense-search.odysee.tv',
            port: 443,
            protocol: 'https',
          }
        ],
        apiKey: '4GTsCd3uCubegfQOZKE9z6k39LGulcrg',
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},

      // Optional
      contextualSearch: true,
    },
      metadata: [{name: 'keywords', content: 'odysee, help, help hub, support'}],
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
                href: 'https://www.facebook.com/OdyseeForever/',
              },
              {
				faicon: "fa-brands fa-instagram",
                label: 'Instagram',
                href: 'https://www.instagram.com/odyseeforever/',
              },
              {
				faicon: "fa-brands fa-twitter",
                label: 'Twitter',
                href: 'https://twitter.com/odyseeteam',
              },
              {
				faicon: "fa-brands fa-tiktok",
                label: 'TikTok',
                href: 'https://www.tiktok.com/@odyseeforever',
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
				faicon: "fa-envelope",
                label: 'help@odysee.com',
                href: 'mailto:help@odysee.com',
              },
              {
				faicon: "fa-circle-info",
                label: 'Community Guidelines',
                to: '/communityguidelines',
              }
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
  url: 'https://help.odysee.tv',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-spaceman.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pt'],
  },
  plugins: [
    function preloadFontPlugin(_context, _options) {
      return {
        name: 'preload-font-plugin',
        configureWebpack(_config, _isServer) {
          return {
            plugins: [new FontPreloadPlugin()],
          };
        },
      };
    },
  ],
  themes: ['docusaurus-theme-search-typesense'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            '/category-livestreaming/',
            '/category-basics/',
            '/category-syncprogram/',
            '/category-channels/',
            '/category-interaction/',
            '/category-uploading/',
            '/category-playlists/',
            '/category-monetization/',
            '/category-wallet/',
            '/category-blockchain/',
            '/category-moderation/',
            '/category-contentdiscovery/',
            '/category-categories/',
            '/category-accountcreation/',
            '/category-loggingin/',
            '/category-walkthrough/',
            '/category-faq/',
            '/category-fileuploads/',
            '/category-textuploads/',
            '/category-creatingalivestream/',
            '/category-rewards/',
            '/category-earningsperview/',
            '/category-lbctips/',
            '/category-cashtips/',
            '/category-staking/',
            '/category-monetization/category-earningsperview/',
          ],
          filename: 'sitemap.xml',
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
			if (docPath.endsWith('index.mdx')) { return null; }
			if (docPath.endsWith('assets.mdx')) { return null; }
			if (docPath.endsWith('copyrightpolicy.mdx')) { return null; }
			if (docPath.endsWith('communityguidelines.mdx')) { return null; }
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
