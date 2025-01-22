import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const chConfig = {
	ignoreCode: codeblock => codeblock.lang === "mermaid",
	components: { code: "MyCode" },
	syntaxHighlighting: {
		theme: "github-dark",
	},
};

const config: Config = {
	title: "Trusted Foundations",
	tagline: "Notes and tutorials",
	favicon: "img/trusted-foundations-icon.ico",

	// production url
	url: "https://www.trustedfoundations.dev",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "securesign", // Usually your GitHub org/user name.
	projectName: "trusted-foundations", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	markdown: {
		mermaid: true,
	},

	plugins: [require.resolve("docusaurus-lunr-search")],

	presets: [
		[
			"classic",
			{
				docs: {
					beforeDefaultRemarkPlugins: [[remarkCodeHike, chConfig]],
					recmaPlugins: [[recmaCodeHike, chConfig]],
					routeBasePath: "/", // serve the docs at the site's root
					sidebarPath: "./sidebars.ts",
				},
				// blog: {
				//   showReadingTime: true,
				//   feedOptions: {
				//     type: ['rss', 'atom'],
				//     xslt: true,
				//   },
				//   // Useful options to enforce blogging best practices
				//   onInlineTags: 'warn',
				//   onInlineAuthors: 'warn',
				//   onUntruncatedBlogPosts: 'warn',
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themes: ["@docusaurus/theme-mermaid"],

	themeConfig: {
		colorMode: {
			respectPrefersColorScheme: true,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
				hideable: true,
			},
		},
		footer: {
			style: "dark",
			links: [
				// {
				// 	title: "Docs",
				// items: [
				// 	{
				// 		label: "Tutorial",
				// 		to: "/docs/category/security-fundamentals",
				// 	},
				// ],
				// },
				// {
				// 	title: "Community",
				// 	items: [
				// 		{
				// 			label: "Stack Overflow",
				// 			href: "https://stackoverflow.com/questions/tagged/supply-chain-security",
				// 		},
				// 	],
				// },
				// {
				// 	title: "More",
				// 	items: [
				// 		// {
				// 		//   label: 'Blog',
				// 		//   to: '/blog',
				// 		// },
				// 		{
				// 			label: "GitHub",
				// 			href: "https://github.com/securesign/trusted-foundations",
				// 		},
				// 	],
				// },
			],
			copyright: `Copyright © ${new Date().getFullYear()} Trusted Foundations`,
		},
		// social card
		image: "img/trusted-foundations-icon.svg",
		metadata: [
			{ name: "keywords", content: "software supply chain, security" },
		],
		navbar: {
			title: "Trusted Foundations",
			logo: {
				alt: "Logo",
				src: "img/trusted-foundations-icon.svg",
			},
			// items: [
			// 	{
			// 		type: "docSidebar",
			// 		sidebarId: "tutorialSidebar",
			// 		position: "right",
			// 		label: "Learning",
			// 	},
			// ],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
