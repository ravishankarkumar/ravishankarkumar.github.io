import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ravi Shankar",
  description: "Personal website of Ravi Shankar, Applied AI engineer, teacher through Kavriq, and family man.",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { property: 'og:title', content: 'Ravi Shankar' }],
    ['meta', { property: 'og:description', content: 'Applied AI engineer, teacher through Kavriq, and family man.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://ravishankarkumar.com/' }],
    ['meta', { property: 'og:image', content: 'https://ravishankarkumar.com/Gemini_Generated_Image_9kc7c39kc7c39kc7.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Ravi Shankar' }],
    ['meta', { name: 'twitter:description', content: 'Applied AI engineer, teacher through Kavriq, and family man.' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'YouTube', link: 'https://www.youtube.com/@kavriq' },
      { text: 'Resume', link: '/resume.pdf' },
      // { text: 'Blog - AI under the hood', link: 'https://aiunderthehood.com/' }
    ],

    sidebar: [
      // { text: 'Blog - AI under the hood', link: 'https://aiunderthehood.com/' }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ravi-shankar-a725b0225/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@kavriq' }
    ]
  }
})
