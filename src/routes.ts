import Home from './views/Home.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'
import Pricing from './views/Pricing.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/services', component: Services, meta: { title: 'Services' } },
  { path: '/pricing', component: Pricing, meta: { title: 'Pricing' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  {
    path: '/*',
    component: NotFound,
    metameta: { title: 'Page not found' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Page not found' },
  },
]
