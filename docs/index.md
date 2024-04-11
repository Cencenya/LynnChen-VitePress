---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 林岑LynnCen
  text: Web Developer Blog
  tagline: LynnCen daily record
  image:
    src: /LynnCenLogo.png
    alt: 林岑LynnCen
  actions:
    - text: LynnCen物语
      link: /
    - text: WebFrontEnd Navigation
      link: /nav/
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
    - text: Soul
      link: /test
      theme: alt
features:
  - icon: 📖
    title: WebFrontEnd Interview
    details: Prepare for the interviews and sum up the most popular interview problems for front-end Web development, full-stack. <small> ( ͡° ͜ʖ ͡°)  </small><br />
    link: /interview/js
    linkText: Common knowledge
  - icon: 📘
    title: Custom Hooks
    details: Learn ReactHooks (づ｡◕‿‿◕｡)づ  <br /> make something customizing hooks 🚀
    link: /react/customHook/hooks
    linkText: hooks
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /utils/utils
    linkText: 常用工具库
  - icon: 🧰
    title: Common Tools
    details: To do a good job, an artisan needs the best tools<br />Record software, plug-ins, extensions, etc. used in development and daily use
    link: /nav/
    linkText: Tools
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    # link: https://notes.fe-mm.com/pit/npm
    linkText: 踩坑记录 ಥ_ಥ
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    # link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
