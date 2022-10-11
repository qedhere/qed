/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";

const NextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMath, remarkPrism, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
});

export default NextConfig({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["github.com", "lh3.googleusercontent.com", "i.imgur.com"],
  },
});
