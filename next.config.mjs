/** @type {import('next').NextConfig} */

import withMDX from "@next/mdx";

const NextConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
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
