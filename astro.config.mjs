import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from "rehype-mermaid";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Secure Software Hub',
    social: {
      github: 'https://github.com/securesign/ssc-hub'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        slug: 'guides/example'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Supply Chain',
      autogenerate: {
        directory: 'supply-chain'
      }
    }]
  })],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
  output: "server",
  adapter: netlify()
});
