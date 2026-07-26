import type { NextConfig } from "next";
import path from "path";

const repoName = "adiro-studio";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
