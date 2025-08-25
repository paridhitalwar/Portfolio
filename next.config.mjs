// Enable static HTML export so the site can be hosted on GitHub Pages (which only serves static files).
// If your GitHub repository is NOT named <username>.github.io, replace `"/portfolio-site"` with `"/<REPO_NAME>"`.
// For a <username>.github.io repo leave `basePath` and `assetPrefix` commented out or empty.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully-static production build in the `out/` folder.
  output: 'export',

  // Uncomment & adjust these two lines **iff** your repo is NOT <username>.github.io
  // basePath: '/portfolio-site',      // <- replace with your repository name
  // assetPrefix: '/portfolio-site/',

  // Disable the Image Optimization API (not supported with `next export`).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
