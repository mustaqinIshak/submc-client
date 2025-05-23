/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
//   images: {
//     loader: 'custom',
//     loaderFile: './my-loader.js',
//   },
  env: {
    NEXT_LOCAL_BASE_API_URL:"http://127.0.0.1:8000/api",
    NEXT_LIVE_BASE_API_URL:"https://apigateway.crasherltd.com/api",
  }
}

module.exports = nextConfig
