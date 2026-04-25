import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ravi Shankar",
  description: "Personal website of Ravi Shankar, engineer and builder working on Murali, Kavriq, and AI infrastructure.",
  cleanUrls: true,
  head: [
    ['meta', { property: 'og:title', content: 'Ravi Shankar' }],
    ['meta', { property: 'og:description', content: 'Engineer and builder working on Murali, a Rust animation engine, and Kavriq, an AI education platform.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://ravishankarkumar.com/' }],
    ['meta', { property: 'og:image', content: 'https://ravishankarkumar.com/Gemini_Generated_Image_9kc7c39kc7c39kc7.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Ravi Shankar' }],
    ['meta', { name: 'twitter:description', content: 'Engineer and builder working on Murali, a Rust animation engine, and Kavriq, an AI education platform.' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'YouTube', link: 'https://www.youtube.com/@RaviShankar-sn2kc/featured' },
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
      { icon: 'youtube', link: 'https://www.youtube.com/@RaviShankar-sn2kc/featured' }
    ]
  }
})
