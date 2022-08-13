/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkPrism from "remark-prism";

const NextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMath, remarkPrism],
    rehypePlugins: [rehypeKatex],
  },
});

export default NextConfig({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
});
