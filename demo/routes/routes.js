export const enDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/enUS/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/enUS/index.md')
  }
]
export const zhDocRoutes = [
  // basic docs
  {
    path: 'introduction',
    component: () => import('../pages/docs/introduction/zhCN/index.md')
  },
  {
    path: 'installation',
    component: () => import('../pages/docs/installation/zhCN/index.md')
  }
]
export const zhComponentRoutes = [
  {
    path: 'first',
    component: () => import('../../src/first/demos/zhCN/index.demo-entry.md')
  }
]
export const routes = [
  {
    name: 'home',
    path: '/:lang/:theme',
    component: () => import('../pages/home/index.vue')
  },
  {
    name: 'enDocs',
    path: '/en-US/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: enDocRoutes
  },
  {
    name: 'zhDocs',
    path: '/zh-CN/:theme/docs',
    component: () => import('../pages/Layout.vue'),
    children: zhDocRoutes
  },
  // TODO: enComponets路径
  // {
  //   name: 'enComponents',
  //   path: '/en-US/:theme/components',
  //   component: () => import('../pages/Layout.vue'),
  //   children: enComponentRoutes
  // },
  {
    name: 'zhComponents',
    path: '/zh-CN/:theme/components',
    component: () => import('../pages/Layout.vue'),
    children: zhComponentRoutes
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
      params: {
        lang: navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US',
        theme: 'os-theme'
      }
    }
  }
]
