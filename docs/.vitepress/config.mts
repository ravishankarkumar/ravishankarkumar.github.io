import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ravi Shankar Krishnauth",
  description: "Personal website of Ravi Shankar krishnauth",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ravi-shankar-a725b0225/' }
    ]
  }
})
