module.exports = {
  base: "/blog/",
  // dest: 'dist',
  title: "Flyingpig's Blog",
  description: "学习笔记",
  head: [
    ["link", { rel: "icon", href: `/flyingpig.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  plugins: [
    "@vuepress/nprogress",
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true,
    },
  ],
  serviceWorker: true,
  theme: "awesome",
  themeConfig: {
    smoothScroll: true,
    logo: "/flyingpig.png",
    repo: "https://github.com/flyingpig2016/flyingpigBlog.git",
    editLinks: false,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "Languages",
        items: [
          { text: "Chinese", link: "/language/chinese" },
          { text: "Japanese", link: "/language/japanese" },
        ],
      },
    ],
    sidebar: [
      {
        title: "JavaWeb", // 必要的
        // path: "/javaWeb/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          {
            title: "服务器",
            collapsable: true, // 可选的, 默认值是 true,
            children: [
              {
                title: "nginx",
                collapsable: false,
                path: "/javaWeb/service/nginx",
              },
            ],
          },
        ],
      },
    ],
  },
};
