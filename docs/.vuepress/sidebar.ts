import { sidebar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
export default sidebar({
  "": [
    //"/DailyRoutine",
    //"/Fitness",
    // 读书笔记架构更换到 docsify，不能使用相对链接
    //{ text: "读书笔记", icon: "fa6-brands:readme", link: "https://newzone.top/reading/" },
    // 指定显示页面
    {
      text: "计算机网络",
      icon: "icon-park-outline:computer",
      prefix: "/计算机网络/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "算法数据结构",
      icon: "hugeicons:algorithm",
      prefix: "/算法数据结构/",
      collapsible: true,
      children: [
        "0.学习路径.md",
        "1.思维导图.md",
        "2.参考书籍.md",
        {
          text: "数据结构",
          prefix: "数据结构/",
          icon: "carbon:data-structured",
          collapsible: true,
          children: "structure",
        },
        {
          text: "算法",
          prefix: "算法/",
          icon: "arcticons:algorithms",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "编程语言",
      icon: "codicon:code",
      prefix: "/编程语言/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "常用软件",
      icon: "fluent:apps-32-filled",
      prefix: "/常用软件/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "架构设计",
      icon: "carbon:microservices-1",
      prefix: "/架构设计/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "大模型LLM",
      icon: "ri:ai-generate-2",
      prefix: "/大模型LLM/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具武器库",
      icon: "entypo:tools",
      prefix: "/工具武器库/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "面试经验",
      icon: "fluent:people-chat-24-regular",
      prefix: "/面试经验/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "个人思考",
      icon: "icon-park-outline:thinking-problem",
      prefix: "/个人思考/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "我的世界",
      icon: "streamline-plump:world-remix",
      prefix: "/我的世界/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "博客文章",
      icon: "fa6-solid:feather-pointed",
      prefix: "/_posts/",
      link: "/blog",
      collapsible: true,
      children: "structure",
    },
    { text: "读书笔记", 
      icon: "fa6-brands:readme", 
      link: "https://www.notion.so/navyum/1c42fcd1fefa4e948d8514761b2ab8c7?v=0ca5dc6ee29e4c2787dbd0f1055b4ed0" 
    }
  ]

});
