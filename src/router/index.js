import case1 from '@/pages/case/case'
import index from '@/pages/index/index'
import detail from '@/pages/caseDetail/detail'
const route = [
  {
    path: '/index.html',
    name: 'index',
    component: index
  },
  {
    path: '/case.html',
    name: 'case',
    component: case1
  },
  {
    path: '/detail.html',
    name: 'detail',
    component: detail
  },
]


export default route
