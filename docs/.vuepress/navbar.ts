import { navbar } from "vuepress-theme-hope";

// 图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87
// https://fontawesome.com/search?m=free&o=r
// 专题话题的路径需在尾部添加 /，否则有可能出现链接错误。比如下方「生活」中的 baby/
export default navbar([
  { text: "主页", icon: "meteor-icons:home", link: "/" },
  { text: "博客", icon: "fa6-solid:blog", link: "/blog" },
  { 
    text: "思考", 
    icon: "icon-park-outline:thinking-problem", 
    children: [
      {
        text: "面试经验",
        icon: "fluent:people-chat-24-regular",
        link: "/面试经验/"
      },
      {
        text: "个人思考",
        icon: "icon-park-outline:thinking-problem",
        link: "/个人思考/"
      }, 
    ] 
  },
  {
    text: "我的世界",
    icon: "streamline-plump:world-remix",
    link: "/我的世界/"
  },
  { 
    text: "读书笔记", 
    icon: "fa6-brands:readme", 
    link: "https://www.notion.so/navyum/1c42fcd1fefa4e948d8514761b2ab8c7?v=0ca5dc6ee29e4c2787dbd0f1055b4ed0" 
  },
  {
    text: "联系",
    icon: "fa6-solid:toolbox",
    link: "/intro"
  }
]);
