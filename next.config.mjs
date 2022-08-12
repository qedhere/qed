/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

const NextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
});

export default NextConfig({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
  },
});
