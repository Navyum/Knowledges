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
      icon: "",
      prefix: "/计算机网络/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "算法数据结构",
      icon: "",
      prefix: "/算法数据结构/",
      link: "",
      collapsible: true,
      children: [
        "0.学习路径.md",
        "1.思维导图.md",
        "2.参考书籍.md",
        {
          text: "数据结构",
          prefix: "数据结构/",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: "structure",
        },
        {
          text: "算法",
          prefix: "算法/",
          icon: "fa6-brands:windows",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "编程语言",
      icon: "",
      prefix: "/编程语言/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "常用软件",
      icon: "",
      prefix: "/常用软件/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "架构设计",
      icon: "",
      prefix: "/架构设计/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "大模型LLM",
      icon: "",
      prefix: "/大模型LLM/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "工具武器库",
      icon: "",
      prefix: "/工具武器库/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "面试经验",
      icon: "",
      prefix: "/面试经验/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "个人思考",
      icon: "",
      prefix: "/个人思考/",
      link: "",
      collapsible: true,
      children: "structure",
    },
    {
      text: "我的世界",
      icon: "",
      prefix: "/我的世界/",
      link: "",
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
    { text: "读书笔记", icon: "fa6-brands:readme", link: "https://www.notion.so/navyum/1c42fcd1fefa4e948d8514761b2ab8c7?v=0ca5dc6ee29e4c2787dbd0f1055b4ed0" }
  ]
  
});
