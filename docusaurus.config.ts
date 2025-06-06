import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const organizationName = "matteo9966";
const projectName = "ippicamanifestazioni-docs";

const config: Config = {
  title: 'Guida all\'utilizzo di Ippica manifestazioni',
  tagline: 'Ippica manifestazioni',
  favicon: 'img/favicon.png',
  

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`, 
  // baseUrl: '/ippicamanifestazioni/docs/', 
  trailingSlash:false,

  headTags:[
     {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: "frame-src *;",
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.


  // organizationName: 'greenaus', // Usually your GitHub org/user name.
  // projectName: 'ippicamanifestazioni-docs', // Usually your repo name.
  

  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        // docs:false,
        docs: {
          routeBasePath:'/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        // blog: {
        //   showReadingTime: true,
        //   routeBasePath:'guida',
        //   blogDescription:'Guida tecnica utilizzo dell\'applicazione Ippica manifestazioni',
        //   path:'./guida',
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    // navbar: {
    //   title: 'Guida ippica manifestazioni',
    //   logo: {
    //     alt: 'Ippica manifestazioni logo',
    //     src: 'img/favicon.png',
    //   },
    //   items: [
    //     // {
    //     //   type: 'docSidebar',
    //     //   sidebarId: 'tutorialSidebar',
    //     //   position: 'left',
    //     //   label: 'Tutorial',
    //     // },
    //     // {to: '/guida', label: 'Guida all\'utilizzo', position: 'left'},
    //     // {to:'/',label:'Guida all\'utilizzo - Docs', position:'left'}
    //     // {
    //     //   href: 'https://github.com/facebook/docusaurus',
    //     //   label: 'GitHub',
    //     //   position: 'right',
    //     // },
    //   ],
    // },
    // footer:false,
    // footer:{

    // }
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Tutorial',
    //     //       to: '/docs/intro',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Community',
    //     //   items: [
    //     //     {
    //     //       label: 'Stack Overflow',
    //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'Discord',
    //     //       href: 'https://discordapp.com/invite/docusaurus',
    //     //     },
    //     //     {
    //     //       label: 'X',
    //     //       href: 'https://x.com/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'More',
    //     //   items: [
    //     //     {
    //     //       label: 'Blog',
    //     //       to: '/blog',
    //     //     },
    //     //     {
    //     //       label: 'GitHub',
    //     //       href: 'https://github.com/facebook/docusaurus',
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Greenaus`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
