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
	tagline: "Software supply chain security tutorials and tips",
	favicon: "img/trusted-foundations-icon.ico",

	// production url
	url: "https://trustedfoundations.dev",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

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
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				// blog: {
				//   showReadingTime: true,
				//   feedOptions: {
				//     type: ['rss', 'atom'],
				//     xslt: true,
				//   },
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   editUrl:
				//     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
				{
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/docs/category/security-fundamentals",
						},
					],
				},
				{
					title: "Community",
					items: [
						{
							label: "Stack Overflow",
							href: "https://stackoverflow.com/questions/tagged/supply-chain-security",
						},
					],
				},
				{
					title: "More",
					items: [
						// {
						//   label: 'Blog',
						//   to: '/blog',
						// },
						{
							label: "GitHub",
							href: "https://github.com/securesign/trusted-foundations",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Trusted Foundations`,
		},
		// Replace with your project's social card
		// image: 'img/docusaurus-social-card.jpg',
		image: "img/trusted-foundations-icon.svg",
		metadata: [{ name: "keywords", content: "open source, security" }],
		navbar: {
			title: "Trusted Foundations",
			logo: {
				alt: "Logo",
				// src: 'img/logo.svg',
				src: "img/trusted-foundations-icon.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Learning",
				},
				// {to: '/blog', label: 'Blog', position: 'left'},
				// { href: "/resources", label: "Resources", position: "left" },
				{
					href: "https://github.com/securesign/trusted-foundations",
					label: "GitHub",
					position: "right",
				},
			],
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
