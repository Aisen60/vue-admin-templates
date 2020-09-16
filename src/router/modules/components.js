/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '常用组件',
    icon: 'component'
  },
  children: [

    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: '返回顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: '拖动对话框' }
    }
  ]
}

export default componentsRouter
