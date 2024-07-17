/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com','randomuser.me','www.google.com',"upload.wikimedia.org"],
      },
      experimental:{
        reactRoot: true,
        suppressHydrationWarning: true,
      }
}

module.exports = nextConfig
