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
      { text: 'Project Kanha', link: 'https://projectkanha.com/about' }
    ],

    sidebar: [
      { text: 'Project Kanha', link: 'https://projectkanha.com/about' }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Project Kanha', link: '/project-krishna' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
