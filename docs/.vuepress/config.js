import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  lang: 'en-US',
  title: 'openapidocs.net',
  description: 'The .NET OpenAPI Documentation Hub',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: 'https://github.com/xC0dex/openapidocs',
    docsDir: '/docs',
    contributors: false,
    editLink: false,
    navbar: ['/'],
    sidebar: [
      {
        text: 'Getting Started',
        collapsible: true,
        children: ['/get-started', '/fundamentals/what-is-openapi'],
      },
      {
        text: 'OpenAPI Generators',
        collapsible: true,
        // children: [
        // 	'/generators/aspnetcore-openapi',
        // 	'/generators/swashbuckle',
        // 	'/generators/nswag',
        // ],
      },
      {
        text: 'Core Features',
        collapsible: true,
      },
      {
        text: 'UI Integration',
        collapsible: true,
      },
      // {
      // 	text: 'Advanced Topics',
      // 	collapsible: false,
      // 	children: [
      // 		'/advanced/versioning',
      // 		'/advanced/multiple-docs',
      // 		'/advanced/custom-operation-filters',
      // 		'/advanced/performance',
      // 	],
      // },
      // {
      // 	text: 'Best Practices',
      // 	collapsible: false,
      // 	children: [
      // 		'/best-practices/naming-conventions',
      // 		'/best-practices/documentation-standards',
      // 		'/best-practices/security',
      // 		'/best-practices/testing',
      // 	],
      // },
    ],
  }),
  bundler: viteBundler(),
});
