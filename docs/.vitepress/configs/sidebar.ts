import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/Javascript/': [
    {
      text: 'JS引擎',
      link: 'Javascript/Advance/execution'
    },
    {
      text: '调用堆栈',
      items: [
        {
          text: '执行上下文和执行栈',
          link: 'Javascript/Advance/executionContext'
        },
        {
          text: '执行上下文栈和变量对象',
          link: 'Javascript/Advance/executionStack'
        }
      ]
    }
  ],
  '/react/': [
    {
      text: 'React源码',
      items: [
        {
          text: '核心概念',
          link: '/react/core/basic'
        }, {
          text: '设计理念',
          link: '/react/core/设计理念'
        },
        {
          text: '内核关系',
          link: '/react/core/innerCore'
        },
        {
          text: '基本数据结构',
          link: '/react/core/baseStruct'
        }
      ]
    },
    {
      text: 'React实践',
      items: [
        {
          text: '思考',
          link: '/react/record/thinking'
        },
        {
          text: '自定义Hooks',
          link: '/react/customHook/hooks'
        },
        {
          text: 'React with TS',
          link: '/react/utils/type'
        }
      ]
    }
  ],
  '/interview/': [
    {
      text: 'HTML',
      link: '/interview/html',
    },
    {
      text: 'CSS',
      link: '/interview/css',
    },
    {
      text: 'Javascript',
      link: '/interview/js',
    },
    {
      text: 'React',
      link: '/interview/react',
    },
    {
      text: 'Typescript',
      link: '/interview/typescript',
    },
    {
      text: 'WebPack',
      link: '/interview/webpack',
    },
    {
      text: '浏览器',
      link: '/interview/browser',
    },
    {
      text: '网络',
      link: '/interview/network',
    },
    {
      text: '项目总结',
      link: '/project',
    },
    {
      text: '笔试题',
      link: '/interview/coding',
    },
  ],
  '/os/': [
    {
      text: '操作系统基础',
      items: [
        {
          text: '第一章 操作系统引论',
          link: '/os/chapter1'
        },
        {
          text: '第二章 进程与线程',
          link: '/os/chapter2'
        },
      ]
    }
  ],

  '/dataStructure/': [
    {
      text: '数据结构',
      items: [
        {
          text: '第一章 绪论',
          link: '/dataStructure/chapter1'
        },
        {
          text: '第二章 线性表',
          link: '/dataStructure/chapter2'
        },
        {
          text: '第三章 栈、队列和数组',
          link: '/dataStructure/chapter3'
        },
        {
          text: '第四章 串',
          link: '/dataStructure/chapter4'
        },
        {
          text: '第五章 树与二叉树',
          link: '/dataStructure/chapter5'
        },
        {
          text: '第六章 图',
          link: '/dataStructure/chapter6'
        }
      ]
    }
  ],
  '/组成原理/': [
    {
      text: '计算机组成原理',
      items: [
        {
          text: '第一章 计算机系统概述',
          link: '/组成原理/chapter1'
        },
        {
          text: '第二章 数据的表示和运算',
          link: '/组成原理/chapter2'
        },
      ]
    }
  ],
  '/webpack/': [
    {
      text: 'WebPack性能优化',
      link: '/webpack/performance'
    },
    {
      text: '原子化Css',
      link: '/webpack/unocss'
    },
  ],
  '/browser/': [
    {
      text: '宏观视角下的浏览器',
      items: [
        {
          text: 'Chorme架构',
          link: '/browser/Chrome架构'
        },
        {
          text: 'TCP协议',
          link: '/browser/TCP协议'
        },
        {
          text: 'HTTP协议',
          link: '/browser/HTTP'
        },
        {
          text: '导航流程',
          link: '/browser/导航流程'
        },
        {
          text: '渲染流程（上）',
          link: '/browser/renderfirst'
        },
        {
          text: '渲染流程（下）',
          link: '/browser/rendersec'
        },
      ]
    },

    {
      text: 'Javascript中的执行机制',
      items: [
        {
          text: '变量提升',
          link: '/browser/变量提升'
        },
        {
          text: '调用栈',
          link: '/browser/调用栈'
        },
        {
          text: '块级作用域',
          link: '/browser/块级作用域'
        },
        {
          text: '作用域链和闭包',
          link: '/browser/作用域链和闭包'
        },
        {
          text: 'This',
          link: '/browser/this'
        },
      ]
    },
  ]
}
